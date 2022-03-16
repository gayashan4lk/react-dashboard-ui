import React, { Component } from 'react';

class ArticleMenuItem extends Component {
  state = { 
    article : {
      title : "Some article",
      content : "some article body",
      created_on : "2021-02-36",
      last_edited_on : "2021-03-56",
      published_on : "2021-03-25",
      author : "some author"
    }
   } 
  render() { 
    return (
      <a href="#" class="list-group-item list-group-item-action" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </a>
    );
  }
}
 
export default ArticleMenuItem;