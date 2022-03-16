import React from 'react';
import './App.css';
import ArticleCard from './components/ArticleCard';
import Avatar from './components/Avatar';
import Navigation from './components/Navigation';
import ArticleMenuItem from './components/ArticleMenuItem.js';

function App() {
  return (
    <React.Fragment>
      
      <Navigation />
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-2" id="profile-col">
              <Avatar />
            </div>
            <div className="col-md-6" id="article-col">
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
            <div className="col-md-4" id="article-menu-col">
              <div className="list-group">
                <ArticleMenuItem />
                <ArticleMenuItem />
                <ArticleMenuItem />
                <ArticleMenuItem />
                </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;