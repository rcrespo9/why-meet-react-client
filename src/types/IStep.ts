import IChoice from './IChoice'
import IFinalStep from './IFinalStep'

export default interface Step {
  text: string
  choices: IChoice[] | null
  final_step: IFinalStep | null
}