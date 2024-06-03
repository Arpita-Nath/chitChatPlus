import React from 'react'

const Image = ({source, alt, style, onclick}) => {
  return (
    <img src={source} alt={alt} className={style} onClick={onclick} />
  )
}

export default Image