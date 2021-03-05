export default interface Choice {
  text: string
  answer: string
  additional_answer_text: string | null
  step: number
  next_step: number
}