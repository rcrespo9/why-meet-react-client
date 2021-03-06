import React from 'react'
import IChoice from '../interfaces/IChoice'

function StepChoice({ id, answer, additional_answer_text, next_step, stepChangeEvent }: IChoice) {
  return (
    <label>
      <input type="radio" name="step_choice" id={`choice_${id}`} value={next_step} onChange={stepChangeEvent} />
      { answer }{additional_answer_text ? `, ${additional_answer_text}`: ''}
    </label>
  )
}

export default StepChoice