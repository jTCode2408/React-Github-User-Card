import React from 'react';



const FollowerCard = (props) => {
    console.log(`props Follower`, props)
  
    return (
      <div className = "follower-card">   
        <img width ="200" src={props.follower.avatar_url} alt="profile pic" href="{props.follower.followers_url}"/>
        <div>
        <h2>{props.follower.login}</h2> 
        <h4>{props.follower.name}</h4>
        <a href = {props.follower.html_url} alt = "user page link">Profile</a>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        </div>
      </div>
    )
  }
  
  
  export default FollowerCard;