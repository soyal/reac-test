import { observable, computed, autorun } from 'mobx'

const numbers = observable([1, 2, 3])
console.log(numbers.get(0))
const computedNumbers = computed(() => {
  console.log('computed run')
  return numbers.map((e) => {
    return e + 1
  })
})

autorun(() => {
  console.log('computedNumbers change, value is ', computedNumbers.get())
})


