import { NavLink,Link } from 'react-router-dom';
import '../css/header.css'

export function Header() {
    return (
           
            <div className="headerContainer">
                <div className='headerLink'>
                <ul>
                    <li>
                        <Link to="/"><p>Home</p></Link>
                    </li>
                    <li>
                        <Link to="/portfolio"><p>Porfolio</p></Link>
                    </li>
                    
                    <li>
                        <Link to="/contact"><p>Contact</p></Link>
                    </li>
                    
                </ul>
                </div>
            </div>
       
    );
}
