import React from 'react';
import './App.css';
import ArticleCard from './components/ArticleCard';
import Avatar from './components/Avatar';
import Navigation from './components/Navigation';
import ArticleMenuItem from './components/ArticleMenuItem.js';
import UserInfo from './components/UserInfo';

function App() {
  const usersData = require('./json/users.json');
  const user = usersData.users[0];
  console.log(user);

  const articleData = require('./json/articles.json');
  const article = articleData.articles[0];
  console.log(article);

  return (
    <React.Fragment>
      <Navigation />
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-2" id="profile-col">
              <UserInfo user={user} />
            </div>
            <div className="col-md-6" id="article-col">
              <ArticleCard article={article}/>
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