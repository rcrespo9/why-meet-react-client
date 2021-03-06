export default interface IChoice {
  id: number
  answer: string
  additional_answer_text: string | null
  next_step: number
  stepChangeEvent: React.ChangeEventHandler
}