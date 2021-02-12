import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [articles, setArticles] = useState([
        {title: 'My new website', body: 'Lorem ipsum...', author: 'Gilles', id: 1},
        {title: 'Welcome party', body: 'Lorem ipsum...', author: 'Auriane', id: 2},
        {title: 'Web dev tips', body: 'Lorem ipsum...', author: 'Gilles', id: 3}
    ]);

    const [name, setName] = useState('Gilles');

    const handleDelete = (id) => {
        const newArticles = articles.filter((article) => {
            return article.id !== id;
        });
        setArticles(newArticles);
    }

    useEffect(() => {
        console.log("useEffect called");
        console.log(name);
    }, [name]);

    return ( 
        <div className="home">
            <BlogList articles={articles} title="All articles" handleDelete={handleDelete}/>
            <button onClick={() => { setName('Auriane')}}>Change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;