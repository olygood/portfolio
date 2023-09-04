import '../css/home.css'
import {Article} from '../component/article/Article'
import { LienInfo } from '../component/lienInfo/LienInfo';

export function Home() {
    return (
        <div className="home_container">
            
            <div className="home_left">
                <p>hello je reviens bientôt</p>
            </div>
            <div className="home_center">
                {/* <h2>Bienvenu</h2>     */}
                <Article />
                <Article />
                <Article />
                
                
            </div>
            <div className="home_right">
                <h3>My Own Sponsors</h3>    

            </div>
        </div>
    );
} 