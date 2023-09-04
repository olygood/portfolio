import { useState } from 'react'
import './App.css'
import { Header } from './front/pages/Header'
import { Main } from './front/pages/Main'
import { Footer } from './front/pages/Footer'


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




