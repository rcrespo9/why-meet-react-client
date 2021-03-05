import IChoice from './IChoice'
import IFinalStep from './IFinalStep'

export default interface IStep {
  text: string
  choices: IChoice[] | null
  final_step: IFinalStep | null
}