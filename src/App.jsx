import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Expertise from './components/Expertise'
import Work from './components/Work'
import Footer from './components/Footer'
import BlogFAQ from './components/BlogFAQ'



function App() {

  return (
        <>
    <Header/>
    <Main/>
    <Expertise/>
    <Work/>
    <BlogFAQ/>
    <Footer/>
    </>
  )
}

export default App
