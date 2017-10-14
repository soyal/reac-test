
const setA = () => ({
  type: 'SET_A',
  value: 1
})

const setAA = () => ({
  type: 'SET_AA',
  value: 2
})

export const trigger = () => (dispatch) => {
  dispatch(setA())
  dispatch(setAA())
}