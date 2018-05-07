import React from 'react'

export default ({image, message, isActive}) => {
  let slideClass = isActive ? 'fade-slide fade-slide-active' : 'fade-slide'
  return (
    <div className={slideClass}>
      <img src={image} alt='slides' />
      <div className='msg'>{message}</div>
    </div>
  )
}
