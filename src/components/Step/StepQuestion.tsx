import React from 'react'

type StepQuestionProps = {
  text: string
}

function StepQuestion ({ text }: StepQuestionProps) {
  return <h1>{text}</h1>
}

export default StepQuestion