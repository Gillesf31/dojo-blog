import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [articles, setArticles] = useState([
        {title: 'My new website', body: 'Lorem ipsum...', author: 'Gilles', id: 1},
        {title: 'Welcome party', body: 'Lorem ipsum...', author: 'Auriane', id: 2},
        {title: 'Web dev tips', body: 'Lorem ipsum...', author: 'Gilles', id: 3}
    ]);

    const handleDelete = (id) => {
        const newArticles = articles.filter((article) => {
            return article.id !== id;
        });
        setArticles(newArticles);
    }

    useEffect(() => {
        console.log("useEffect called");
    })

    return ( 
        <div className="home">
            <BlogList articles={articles} title="All articles" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;