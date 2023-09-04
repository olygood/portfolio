import '../css/cv.css'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export const CV = () => {
const[readme,setReadme]= useState('');

const token = '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';
const headers = new Headers({
    'Authorization': `Bearer ${token}`
});

fetch('https://api.github.com/repos/olygood/portfolio/contents/README.md', {headers})
    .then(response => response.json())
    .then(data => {
        const content = atob(data.content);
        console.log(content);
        setReadme(content);
    });
    
    return (

        <div>
            
            <h1>CV</h1>
            <p>Bienvenu sur mon CV en ligne</p>
         <ReactMarkdown>{readme}</ReactMarkdown>
            
        </div>
    )
}



