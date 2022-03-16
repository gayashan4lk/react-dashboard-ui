import React, { Component } from 'react';

class Avatar extends Component {
  state = {
    firstName : "Leonardo",
    lastName : "DaVinci",
    email : "test@test.com",
    password : "000000000",
    birthday : "1956-05-12",
    postalCode : "654898",
    profileImgUrl : "https://picsum.photos/id/1005/200",
    telMain : "+94112564897",
    telOther : "00000000",
    address : {
      street : "Nightmare alley",
      town : "ghost town",
      state : "dark state",
      country : "Sri lanka"
    }
  } 
  render() { 
    return (
        <div className="avatar">
          <img src={this.state.profileImgUrl} className="img-thumbnail" alt="Profile image" id="profile-img"></img>
          <h5>{this.state.firstName} {this.state.lastName}</h5>
          <h5>{this.state.email}</h5>
          <h5>{this.state.telMain}</h5>
          <h5>{this.state.telOther}</h5>
          <p>{this.state.address.street}, {this.state.address.town}, {this.state.address.state}, {this.state.address.country}</p>
        </div>
    );
  }
}
 
export default Avatar;