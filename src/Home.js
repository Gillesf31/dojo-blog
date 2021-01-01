import { useState } from "react";

const Home = () => {
    const [articles, setArticles] = useState([
        {title: 'My new website', body: 'Lorem ipsum...', author: 'Gilles', id: 1},
        {title: 'Welcome party', body: 'Lorem ipsum...', author: 'Auriane', id: 2},
        {title: 'Web dev tips', body: 'Lorem ipsum...', author: 'Gilles', id: 3}
    ]);
    return ( 
        <div className="home">
            {articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <h2>{ article.title }</h2>
                    <p>Written by { article.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;