import IChoice from './IChoice'
import IInterstitialStep from './IInterstitialStep'
import IFinalStep from './IFinalStep'

export default interface IStep {
  text: string
  choices: IChoice[] | null
  interstitial_step: IInterstitialStep | null
  final_step: IFinalStep | null
}