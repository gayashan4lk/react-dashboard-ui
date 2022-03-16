import React from 'react';

const ArticleCard = (props) => {
  return (
    <div className="article-card-container">
      <div className="card">
        <img src="https://picsum.photos/200" className="card-img-top" alt="Article thumbnail" id="article-card-img"></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}
 
export default ArticleCard;