const BlogList = ({articles, title}) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <h2> {article.title} </h2>
                    <p> Written by {article.author}</p> 
                </div>
            ))} 
        </div>  
    );
}

export default BlogList