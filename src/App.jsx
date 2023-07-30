import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>

        <div className='banner'>
          <h2>OLYGOOD</h2>
          <p>deux</p>
          <p>trois</p>
          <p>quatre</p>
        </div>


        <div className='main'>
          <h2>je suis le main</h2>
        </div>
        
        <div className='footer'>
          <h2>footer</h2>
          <p>réseaux sociaux</p>
          <p>instagram</p>
          <p>twitter</p>
        </div>


      </div>
    </>
  )
}

export default App
