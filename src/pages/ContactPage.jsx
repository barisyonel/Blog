import React from 'react'
import Title from '../components/Title'

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <Title title={"Where We Are!"}/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2041591.997066564!2d33.42477463252656!3d-1.9598738450911972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182d3c0f19d25d51%3A0xb1201ea012c07175!2sSerengeti%20Ekosistemi%2C%20Tanzanya!5e0!3m2!1str!2str!4v1731057057099!5m2!1str!2str"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default ContactPage