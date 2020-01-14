//usr card data here. what data to display
//map over props from api response to set card data
import React from 'react';

function UserCards(props){



return (
    // <h3>Github Users</h3>
<div className = "user-cards">
    {props.users.map(user => (
        <div key = {user.id} className = "user">
            <img src = {user.avatar_url} alt = "user avi"/>
            <h4>{user.name}</h4>
        </div>
    ))}
</div>

)

}

export default UserCards;