import React from 'react'
import Title from '../components/Title'
import { photos } from '../data/data'
import GalleryCard from '../components/GalleryCard'
import { Link } from 'react-router-dom'

const GalleryPage = () => {
  return (
    <>
      <Title title={"Our Photos!"}/>
      <div className='gallery-page'>
      {
        photos.map(item=>
          <Link key={item.id} to={item.id}>
            <GalleryCard photo={item} />
          </Link>
        )
      }
      </div>
    </>
  )
}

export default GalleryPage