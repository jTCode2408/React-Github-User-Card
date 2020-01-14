import React from 'react';



const FollowerCard= (props)=>{

console.log('follower props', props);

    return (
        // <h3>Github Users</h3>
    <div className = "user-cards">
        {/* {props.followers.map(follower => (
            <div key = {follower.id} className = "user">
                <img width = "200" src = {follower.avatar_url} alt = "user avi"/>
                <h5>Github Handle: {follower.login}</h5>
                <a href = {follower.html_url} alt = "user page link">Profile</a>
                <p>Company: {follower.company}</p>
                <p>Bio: {follower.bio}</p>
                <p>Followers: {follower.followers}</p>
                <p>Following: {follower.following}</p>
            </div>
        ))} */}
    </div>
    
    )
    
    }
    
    export default FollowerCard;
