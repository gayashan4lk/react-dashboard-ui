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

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li>{number}</li>);

  return (
    <React.Fragment>
      <Navigation />
      <ul>{listItems}</ul>
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-2" id="profile-col">
              <UserInfo user={user} />
            </div>
            <div className="col-md-6" id="article-col">
              <ArticleCard article={article}/>
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