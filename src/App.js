import React from 'react';
import './App.css';
import axios from 'axios';
import UserCards from './UserCards'
//https://api.github.com/users/
//https://api.github.com/users/< Your github name >/followers
class App extends React.Component {

state = {
  users:[]

};

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
}
render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github usercards</h1>
        <div className = "user-cont">


          <UserCards users = {this.state.users}/>
        </div>
      </header>
    </div>
  );
};
}


export default App;
