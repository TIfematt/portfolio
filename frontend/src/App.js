import React from 'react'
import {About, Footer, Header, Skills, Testimonial, Work} from './containers'
import { Navbar, Preloader } from './components'
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Preloader />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
