import React from 'react';
const FollowerCard = (props) => {
   
    return (
      <div className = "follower-cont">   
        <img width ="200" src={props.follower.avatar_url} alt="profile pic"/>
        <div classname = 'follow-info'>
        <h3>{props.follower.login}</h3> 
       <button> <a href = {props.follower.html_url} alt = "user page link">Profile</a></button>

        </div>
      </div>
    )
  }
  
  
  export default FollowerCard;