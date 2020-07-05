import React from 'react';
import FollowerCard from './FollowerCard';


const Followers = (props) => {
  
    return (
     <div className = "follower">
        {props.followers.map(follower => (
          <FollowerCard 
            follower={follower}
            key={follower.id}/>
  
        ))}
      </div>
    )
  }
  


export default Followers;