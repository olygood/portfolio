import './article.css'

export const Article = () => {
    return (
        <div className="article_container">
           <img src="https://picsum.photos/150/150" alt="article" />
            <div className="article_text">
                <h3>Titre</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>   
            </div> 
            <div className="article_social">
                <p>Partager</p>
                <div className="article_social_icons">
                    <img src="https://picsum.photos/20/20" alt="icon" />
                    <img src="https://picsum.photos/20/20" alt="icon" />
                    <img src="https://picsum.photos/20/20" alt="icon" />
                </div>
            </div>
        </div>

)
}
            

