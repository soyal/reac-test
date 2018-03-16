import React from 'react'
import { render } from 'react-dom'
import Test from './portal'

render(
  <Test></Test>,
  document.querySelector('#root')
)

render(<Test></Test>, document.querySelector('#root'))

