import React from 'react'
import './App.scss'
import MainPage from './pages/MainPage'
import BlogPage from './pages/BlogPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import Navi from './components/Navi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogDetail from './pages/BlogDetail'
import LoadingPage from './pages/LoadingPage'
import GalleryDetail from './pages/GalleryDetail'

const App = () => {
  
  return (
    <BrowserRouter>
    
        <Routes>
            <Route path='/*' element={<LoadingPage/>}/>
            <Route path='/baris' element={<Navi/>}>
              <Route path='main' element={<MainPage/>}/>
              <Route path='blog' element={<BlogPage/>}/>
              <Route path='blog/:blogID' element={<BlogDetail/>}/>
              <Route path='gallery' element={<GalleryPage/>}/>
              <Route path='gallery/:photoID' element={<GalleryDetail/>}/>
              <Route path='contact' element={<ContactPage/>}/>
            </Route>
        </Routes>      
    </BrowserRouter>
  )
}

export default App