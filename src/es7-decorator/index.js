
class Dog {
  @doge
  bark() {
    console.log('wangwang!')
  }
}

function doge(target, key ,descriptor) {
  console.log(key)
}

export default Dog