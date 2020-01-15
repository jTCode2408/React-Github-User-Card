import React from 'react';



const FollowerCard = (props) => {
   
  
    return (
      <div className = "follower-card">   
        <img width ="200" src={props.follower.avatar_url} alt="profile pic"/>
        <div>
        <h2>Handle: {props.follower.login}</h2> 
       <button> <a href = {props.follower.html_url} alt = "user page link">Profile</a></button>

        </div>
      </div>
    )
  }
  
  
  export default FollowerCard;