import React from 'react'

const GalleryCard = ({photo}) => {
  return (
    <img className='gallery-card' src={photo.url}></img>
  )
}

export default GalleryCard