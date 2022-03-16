import React, { Component } from 'react';

class Avatar extends Component {
  state = {
  } 
  render() {
    return (
        <div className="avatar">
          <img src={this.props.profileImgUrl} className="img-thumbnail" alt="Profile image" id="profile-img"></img>
        </div>
    );
  }
}
 
export default Avatar;