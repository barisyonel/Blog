import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingPage = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate("/baris/main");
  }, 3000);  

  return (
    <div className='loading-page'>
        <div className="loader"></div>
    </div>
  )
}

export default LoadingPage