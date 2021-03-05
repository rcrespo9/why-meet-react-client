import React, { useState, useEffect } from 'react'
import StepQuestion from './StepQuestion'
import StepChoice from './StepChoice'
import IStep from '../../interfaces/IStep'
import IChoice from '../../interfaces/IChoice'
import { useParams } from 'react-router-dom'

type StepProps = {
  isFirstStep?: boolean
}

function Step({ isFirstStep }: StepProps) {
  const [stepChoice, setStepChoice] = useState<number | null>(null)
  const [step, setStepData] = useState<IStep | null>(null)
  let { stepId } = useParams<{ stepId: string }>();

  useEffect(() => {
    fetchStep()
  }, []);

  const fetchStep = async (): Promise<void> => {
    try {
      const baseStepsUrl = '/steps'
      const stepUrl = isFirstStep ? `${baseStepsUrl}&is_first_step=True` : `${baseStepsUrl}/${stepId}`
      const response = await fetch(stepUrl);
      const stepData = await response.json()
      setStepData(stepData)
    } catch (error) {
      throw new Error(error)
    }
  }

  if (step) {
    return (
      <>
        <StepQuestion text={step.text} />
        {step.choices && 
          step.choices.map((choice: IChoice) => <StepChoice key={choice.id} id={choice.id} answer={choice.answer} additional_answer_text={choice.additional_answer_text} next_step={choice.next_step} />)
        }
      </>
    )
  } else {
    // TODO: Change to Loading component
    return <h1>Step not found.</h1>;
  }
}

export default Step