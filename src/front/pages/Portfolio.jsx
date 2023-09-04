import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import '../css/portfolio.css'
import { HomeRoute } from '../utils/RoutesPhaths'
import { LienInfo } from '../component/lienInfo/LienInfo'
import { Poker } from '../component/poker/Poker'
import repos from '/public/repos'
import ReactMarkdown from 'react-markdown'



export function Portfolio() {
    const [readme, setReadme] = useState('');

    const responseReadme = fetch('/public/slider.md')
        .then(response => response.text())
        .then(ditmoi => {
            // console.log(ditmoi);
            setReadme(ditmoi);
            console.log();
            return ditmoi;
        })
    //const [data, setData] = useState([repositories]);
    const [data, setData] = useState(repos);
    console.log(data);
    // console.log(sliderReact);

    return (
        <div className="portfolio_container">

            {/* ELEMENT LEFT-------------------------------------------------- */}
            <div className="portfolio_left">
                <h2>Les projets</h2>
                {data.map((item) => {
                    console.log(item);
                    return (
                        <Link className="portfolio_link" to="/portfolio/poker" key={item.id}> <LienInfo project_name={item.project_name}></LienInfo></Link>



                    )
                })}
            </div>
            {/* ELEMENT RIGHT---------------------------------------------------- */}
            <div className="portfolio_right">
                <h2>README</h2>
                <Routes>
                    <Route path="poker" element= {<ReactMarkdown>{readme}</ReactMarkdown>}/>
                </Routes>
            </div>
        </div>



    )
}





