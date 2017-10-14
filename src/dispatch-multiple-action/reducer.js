export default (store = {}, action) => {
  switch (action.type) {
    case 'SET_A':
      return updateStore(store, {
        a: action.value
      })

    case 'SET_AA':
      return updateStore(store, {
        aa: action.value
      })

    default:
      return store
  }
}

function updateStore(store, option) {
  return Object.assign({}, store, option)
}