import { NavLink } from 'react-router-dom';
import '../css/header.css'

export function Header() {
    return (
        <div className="header">
           
            <div className="headerMenu">
                <ul>
                    <li>
                        <NavLink to="/" >
                            
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">
                        <p>Porfolio</p>
                            
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                           <p>Contact</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
