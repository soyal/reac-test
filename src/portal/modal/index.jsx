import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './modal'

const ModalPortal = ({ show }) => {
  return ReactDOM.createPortal(
    <Modal show={show} />,
    document.body
  )
}

export default ModalPortal