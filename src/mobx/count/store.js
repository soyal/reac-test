import {observable, useStrict, action, runInAction} from 'mobx'

useStrict(true)

class CountStore {
  @observable count = 0
  @observable loading = false

  @action countUp = () => {
    this.count ++
  }

  @action countDown = () => {
    this.count --
  }

  @action countUpThreeTime = () => {
    this.count ++
    this.count ++ 
    this.count ++
  }

  @action countUpAsync = async () => {
    this.loading = true

    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2)
      }, 1000)
    })

    runInAction('count up after fetch', () => {
      this.loading = false
      this.count += data
    })
  }
}

export default CountStore