import React from 'react'

const Modal = ({show}) => {
  if(!show) return null
  
  return (
    <div className="modal">
      <h3 className="modal_title">标题</h3>
      <div className="modal_content">modal 内容</div>
    </div>
  )
}

export default Modal