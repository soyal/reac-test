import React from 'react'
import halogen from 'halogen'
import './loader.css'

const { ClipLoader } = halogen

const Loader = ({ color, size, show }) => {
  return (
    <div className="cc-spinner">
      <ClipLoader color={color} size={size}></ClipLoader>
    </div>
  )
}

export default Loader