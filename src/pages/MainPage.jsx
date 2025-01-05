import React from 'react'
import Title from '../components/Title'
import Text from '../components/Text'

const MainPage = () => {
  const text = "React Router enables client side routing.In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation."
  return (
    <div className='main-page'>
    <Title title={"React Router Coop."}/>
    <img src="https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
    <Text text={text}/>
  </div>
  )
}

export default MainPage