import React from 'react';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col-md-3" id="profile-col">
              <h1>Profile</h1>
            </div>
            <div className="col-md-6" id="article-col">
              <h1>article</h1>
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