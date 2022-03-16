import React from 'react';

const ArticleCard = (props) => {
  const { title, description, article_img_url:articleImgUrl, _id:id, author_id:authorId } = props.article;
  console.log(title);

  return (
    <div className="article-card-container">
      <div className="card">
        <img src={articleImgUrl} className="card-img-top" alt="Article thumbnail" id="article-card-img"></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Read more</a>
          <p>{authorId} {id}</p>
        </div>
      </div>
    </div>
  );
}
 
export default ArticleCard; 