
import '../css/main.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Portfolio } from './Portfolio'
import { Contact } from './Contact'
import { CV } from './CV'
import { Poker } from '../component/poker/Poker'

export function Main() {
  return (
    <div className="main">
      
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cv' element={<CV />} />
        
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="poker" element={<Poker />} />
        </Route>
        
      </Routes>

    </div>
  );
}     

        <Route path='/contact' element={<Contact />} />