import React from 'react'
import Title from './Title'

const Card = ({post}) => {
  return (
    <div className='card'>
        <img src={post.img} alt="postImage" />
            <Title title={post.title}/>
    </div>
  )
}

export default Card