import React from 'react'
import StepQuestion from './StepQuestion'
import StepChoice from './StepChoice'
import IStep from '../../interfaces/IStep'
import IChoice from '../../interfaces/IChoice'

function Step({ text, choices, final_step }: IStep) {
  return (
    <>
      <StepQuestion text={text} />
      {choices && 
        choices.map((choice: IChoice) => <StepChoice id={choice.id} answer={choice.answer} additional_answer_text={choice.additional_answer_text} next_step={choice.next_step} />)
      }
    </>
  )
}

export default Step