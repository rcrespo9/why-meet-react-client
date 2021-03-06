import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import StepQuestion from './StepQuestion'
import StepChoice from './StepChoice'
import Loading from './Loading'
import IStep from '../interfaces/IStep'
import IChoice from '../interfaces/IChoice'
import { useParams, useLocation, Link } from 'react-router-dom'

type StepProps = {
  isFirstStep?: boolean
}

function Step({ isFirstStep }: StepProps) {
  const [stepChoice, setStepChoice] = useState<string | null>(null)
  const [step, setStepData] = useState<IStep | null>(null)
  const [isLoading, setLoadingState] = useState<boolean>(false)
  const location = useLocation()
  let { stepId } = useParams<{ stepId: string }>();

  useEffect(() => {
    const fetchStep = async (): Promise<void> => {
      setLoadingState(true)

      try {
        const stepUrl = isFirstStep ? 'first-step/1' : `steps/${stepId}`
        const response = await fetch(stepUrl);
        const stepData = await response.json()
        setStepData(stepData)

        setLoadingState(false)
      } catch (error) {
        setLoadingState(false);
        throw new Error(error)
      }
    }

    fetchStep()
    setStepChoice(null)
  }, [isFirstStep, stepId, location]);

  const onStepChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextStepId: string | undefined = e.currentTarget.value
    
    setStepChoice(nextStepId)
  }

  if (step && !isLoading) {
    return (
      <>
        {step.final_step ? (
          <StepQuestion
            text={`${
              step.final_step.should_go_to_meeting ? "Go!" : "Don't go!"
            } ${step.text}`}
          />
        ) : (
          <StepQuestion text={step.text} />
        )}

        {step.choices &&
          step.choices.map((choice: IChoice) => (
            <StepChoice
              key={choice.id}
              id={choice.id}
              answer={choice.answer}
              additional_answer_text={choice.additional_answer_text}
              next_step={choice.next_step}
              stepChangeEvent={onStepChoiceChange}
            />
          ))}

        {!isFirstStep && <Link to="#">Previous Step</Link>}

        {stepChoice && <Link to={stepChoice}>Next Step</Link>}

        {step.interstitial_step && (
          <Link to={step.interstitial_step.next_step.toString()}>
            Next Step
          </Link>
        )}

        {step.final_step && <Link to="/first-step">Reset</Link>}
      </>
    );
  } else {
    return <Loading />;
  }
}

export default Step