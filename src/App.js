import React from 'react';
import './App.css';
import ArticleCard from './components/ArticleCard';
import Avatar from './components/Avatar';
import Navigation from './components/Navigation';

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col-md-3" id="profile-col">
              <Avatar />
            </div>
            <div className="col-md-6" id="article-col">
              <ArticleCard />
            </div>
            <div className="col-md-3" id="article-menu-col">
              <h1>article menu</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;