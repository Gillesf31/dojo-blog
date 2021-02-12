import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [articles, setArticles] = useState([
        {title: 'My new website', body: 'Lorem ipsum...', author: 'Gilles', id: 1},
        {title: 'Welcome party', body: 'Lorem ipsum...', author: 'Auriane', id: 2},
        {title: 'Web dev tips', body: 'Lorem ipsum...', author: 'Gilles', id: 3}
    ]);
    return ( 
        <div className="home">
            <BlogList articles={articles} title="All articles" />
        </div>
     );
}
 
export default Home;