
import ArticleCard from "../articleCard/ArticleCard";


import "./articleList.css"

function ArticleList(){

    return(
        <div className="article-container" >
            <h2>Article List</h2>
            <div className="article-grid" >
                <ArticleCard 
                    cardImage={"https://picsum.photos/600/400?random=3"} 
                    cardTitle={"Sample Article 1"}
                    cardDescription={"This is a brief description of Sample Article 1."}
                    authorImage={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
                    authorName={"John Doe"}
                    datePost={"June 10, 2024"}
                />
                <ArticleCard
                    cardImage={"https://picsum.photos/600/400?random=3"} 
                    cardTitle={"Sample Article 2"}
                    cardDescription={"This is a brief description of Sample Article 2."}
                    authorImage={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
                    authorName={"Jane Smith"}
                    datePost={"June 12, 2024"}
                />
                <ArticleCard
                    cardImage={"https://picsum.photos/600/400?random=3"} 
                    cardTitle={"Sample Article 3"}
                    cardDescription={"This is a brief description of Sample Article 3."}
                    authorImage={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
                    authorName={"Alice Johnson"}
                    datePost={"June 15, 2024"}
                />
            </div>
        </div>
    )

}



export default ArticleList;

