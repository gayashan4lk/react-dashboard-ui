import React from 'react';
import Avatar from './Avatar';
import '../css/user-info.css';

const UserInfo = (props) => {
  const { firstName, lastName, email, postalCode, address, telMain, profileImgUrl } = props.user;

  return (
    <div className="user-info-container">
      <div className="user-info">
        <div className="avatarcard hovercard">
          <div className="avatar-img-container">
            <Avatar profileImgUrl={profileImgUrl}/>
          </div>
          <div className="info text-wrap ">
            <div className="title ">
              <a className="text-decoration-none text-dark" target="_black" href="">{firstName} {lastName}</a>
            </div>
            <div className="desc">{email}</div>
            <div className="desc">{telMain}</div>
            <div className="desc">{address.street}</div>
            <div className="desc">{address.town}</div>
            <div className="desc">{address.state}</div>
            <div className="desc">{address.country}</div>
            <div className="desc">{postalCode}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default UserInfo;