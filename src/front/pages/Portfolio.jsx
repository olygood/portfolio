import '../css/portfolio.css'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Poker } from '../component/poker/Poker'

export function Portfolio() {
    return (
        <div className="portfolio_container">
            <div className="portfolio_left">
                <h3>Applications</h3>

                <Link to="/poker">Poker</Link>
            </div>
            <div className="portfolio_right">
                <h3>Projects</h3>
            </div>
        </div>
    );
}

