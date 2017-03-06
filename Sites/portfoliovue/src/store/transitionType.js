/**
 * Created by gaspardchavardes on 16/01/2017.
 */
class TransitionType {

  constructor () {
    this.state = {
      transition: 'navigation',
      subtransition: 'subnavigation'
    }

    this.init()
  }
  init () {
  }

  scrolledTransition () {
    this.state.subtransition = 'scrollednavigation'
  }
  basicTransition () {
    this.state.subtransition = 'subnavigation'
  }

}

export default new TransitionType()
