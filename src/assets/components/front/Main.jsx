import { Outlet } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom'
import '../css/main.css'
import { Home } from './Home'
import { Portfolio } from './Portfolio'
import { Contact } from './Contact'

export function Main() {
    return (
        <div className="main">
            <h1>welcom</h1>
     <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
            
        </div>
    );
}
