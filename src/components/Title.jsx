import React from 'react'

const Title = ({title}) => {
  return (
    <div className='title'>
        <h3>{title.toUpperCase()}</h3>
    </div>
  )
}

export default Title