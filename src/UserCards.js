//usr card data here. what data to display
//map over props from api response to set card data
import React from 'react';

function UserCards(props){



return (
    // <h3>Github Users</h3>
<div className = "user-cards">
    {props.users.map(user => (
        <div key = {user.id} className = "user">
            <img width = "200" src = {user.avatar_url} alt = "user avi"/>
            <h4>{user.name}</h4>
            <h5>Github Handle: {user.login}</h5>
            <a href = {user.html_url} alt = "user page link">Profile</a>
            <p>Company: {user.company}</p>
            <p>Bio: {user.bio}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
        </div>
    ))}
</div>

)

}

export default UserCards;