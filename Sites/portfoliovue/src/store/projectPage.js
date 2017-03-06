/**
 * Created by gaspardchavardes on 13/01/2017.
 */

class ProjectPage {

  constructor () {
    this.state = {
      page: 0
    }
  }

  init () {
    this.pageCount = this.items.length
  }

  increment () {
    this.state.page === 3 ? this.state.page = 0 : this.state.page++
    this.next()
  }
  decrement () {
    this.state.page === 0 ? this.state.page = 3 : this.state.page--
    this.next()
  }
  // //  next and previous
  next () {
    this.state.nextOne === 3 ? this.state.nextOne = 1 : this.state.nextOne++
    this.state.previousOne === 1 ? this.state.previousOne = 3 : this.state.previousOne--
  }
}

export default new ProjectPage()
