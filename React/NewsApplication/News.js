export default function News(article){
    return(
      <div className="article">
          <div className="img-block">
            <img src={article.news.urlToImage} height="200px" width="100%" alt="#"></img>
          </div>
          <h3>{article.news.title}</h3>
          <p>{article.news.description.substring(0,100).concat("....")}<a href={article.news.url}>read more</a></p>
          <div className="author-credentials">
               <p>Author:{article.news.author}</p>
               <p>{article.news.source.name}</p>
          </div>
      </div>
    );
}