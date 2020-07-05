//usr card data here. what data to display
//map over props from api response to set card data
import React from 'react';

const UserCards = props => {
    return (
      <div className = 'my-card'>
        <link href="https://fonts.googleapis.com/css2?family=Modak&display=swap" rel="stylesheet"></link>
        <img width= "200"
         src={props.me.avatar_url} 
          alt="jasmine's github profile pic"
        />
        <h1>{props.me.login}</h1> 
        <h2>{props.me.name}'s - {props.me.followers} Followers:</h2>
  
      </div>
    )
  }
  

export default UserCards;