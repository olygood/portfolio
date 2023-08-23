import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import { Header } from './assets/components/front/Header'
import { Main } from './assets/components/front/Main'
import { Footer } from './assets/components/front/Footer'
import { Home } from './assets/components/front/Home'
import { Portfolio } from './assets/components/front/Portfolio'
import { Contact } from './assets/components/front/Contact'


function App() {
  return (

    <Router>
      
      <Header />
      <Main>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      </Main>
      <Footer />


    </Router>



  )
}

export default App
