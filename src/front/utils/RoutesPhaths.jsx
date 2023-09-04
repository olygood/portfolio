import {Routes,Route} from 'react-router-dom';
import {Home} from '../pages/Home';
import {Portfolio} from '../pages/Portfolio';
import {CV} from '../pages/CV';
import {Contact} from '../pages/Contact';
import {Poker} from '../component/poker/Poker';

export const HomeRoute = () => {<Route path='/' component={Home} />};
export const PortfolioRoute = () => {<Route path='/portfolio' component={Portfolio} />};
export const CvRoute = () => {<Route path='/cv' component={Portfolio} />};
export const ContactRoute = () => {<Route path='/contact' component={Contact} />};
export const PokerRoute = () => {<Route path='/poker' component={Poker} />};





