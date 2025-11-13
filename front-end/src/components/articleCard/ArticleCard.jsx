
import "./articleCard.css";

function ArticleCard({cardImage, cardTitle, cardDescription, authorImage, authorName, datePost}){


    return(
        <div  className="article-card" >
            <img src={cardImage} alt="empty" className="card-image" />
            <div  className="card-content" >
                <div  className="text-content" >
                    <h2>{cardTitle}</h2>
                    <p>{cardDescription}</p>
                </div>
                <div className="user-data" >
                    <img src={authorImage} className="author-image" />
                    <h2 className="author" >{authorName}</h2>
                    <p className="date-post" >{datePost}</p>
                </div>
            </div>
        </div>
    )

}


export default ArticleCard;