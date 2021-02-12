const BlogList = ({articles, title, handleDelete}) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <h2> {article.title} </h2>
                    <p> Written by {article.author}</p> 
                    <button onClick={() => handleDelete(article.id)}>Delete blog</button>
                </div>
            ))} 
        </div>  
    );
}

export default BlogList