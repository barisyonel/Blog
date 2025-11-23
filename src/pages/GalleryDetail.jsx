import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { photos } from '../data/data';

const GalleryDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const photoIndex = params.photoID-1;

    useEffect(() => {
        if (isNaN(photoIndex) || photoIndex < 0 || photoIndex >= photos.length) {
          navigate("/");
        }
        }, [photoIndex]);
     
      if (isNaN(photoIndex) || photoIndex < 0 || photoIndex >= photos.length) {
        return null; // Geçersiz durumlarda içeriği render etme
      }
    

  return (
    <div>
        <h3>GalleryDetail</h3>
        <img src={photos[photoIndex].url} alt="img" />
        <p>
            {photos[photoIndex].text}
        </p>
    </div>
  )
}

export default GalleryDetail