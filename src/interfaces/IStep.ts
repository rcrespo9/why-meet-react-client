import IChoice from './IChoice'
import IFinalStep from './IFinalStep'

export default interface IStep {
  text: string
  choices: IChoice[] | null
  is_interstitial: boolean | null
  final_step: IFinalStep | null
}