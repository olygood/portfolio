import { useState } from 'react'
import './App.css'
import { Header } from './assets/components/front/Header'
import { Main } from './assets/components/front/Main'
import { Footer } from './assets/components/front/Footer'



function App() {
  return (

    <div className='app'>

      <Header />
      <Main />
      <Footer />
    </div>

  )
}

export default App
