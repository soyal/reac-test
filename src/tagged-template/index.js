/**
 * 标签模板
 */
const age = 11
const name = 'Mike'

const myTag = (strArr, name, age) => {
  console.log(arguments)
  debugger
}

console.log(myTag`my name is ${name}, age is ${age}, other is ${1111}`)