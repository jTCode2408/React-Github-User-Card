import React from 'react';
import './App.css';
import axios from 'axios';
import UserCards from './UserCards'
import FollowerCard from './FollowerCard'
//https://api.github.com/users/
//https://api.github.com/users/< Your github name >/followers
class App extends React.Component {
constructor(){
  super();
this.state = {
  users:[],
  followers:[]
};
}

componentDidMount(){
axios.get("https://api.github.com/users/jTCode2408")
.then(response =>{

  this.setState({
    users: [response.data]
  });
  console.log('user res',response.data);
})
.catch(error=>{
  console.log("error msg",error);
})
const followers= [
  'asahmed93',
  'aalvinlin',
  'maggieprice',
  'nicbongo',
  'anamonteiro430'
];

followers.map(follower => (
axios.get(`https://api.github.com/users/${follower}`)
.then(response =>{

  this.setState({
    follower: [response.data]
  });
  console.log('Follower res',response.data);
})
.catch(error=>{
  console.log("error follower msg",error);
})


))
}
render(){
  return (
    <div className="App">
        <h1>Github usercards</h1>
        <div className = "user-cont">
          <UserCards users = {this.state.users}/>
          {/* <FollowerCard follower = {this.state.follower}/> */}
        </div>
        <div className = "followers">
        {this.state.followers.map(follower => (
            <div key = {follower.id} className = "user">
                <img width = "200" src = {follower.avatar_url} alt = "user avi"/>
                <h5>Github Handle: {follower.login}</h5>
                <a href = {follower.html_url} alt = "user page link">Profile</a>
                <p>Company: {follower.company}</p>
                <p>Bio: {follower.bio}</p>
                <p>Followers: {follower.followers}</p>
                <p>Following: {follower.following}</p>
                
            </div>
            
        ))}
        
        </div>
    </div>
  );
};
}


export default App;
