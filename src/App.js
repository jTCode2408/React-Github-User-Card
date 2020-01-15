import React, {Component} from 'react';
import './App.css';
import UserCards from './UserCards';
import Followers from './Followers';
import axios from 'axios';


class App extends Component {
  
  state = {
      me: "",
      followers: []
    }
  
  
  componentDidMount() {
    console.log(`mounting`)
    axios
      .get("https://api.github.com/users/jTCode2408")       
      .then(initialRes => {
        console.log(`my response`, initialRes.data)
        this.setState({
          me: initialRes.data
        })        
      })
      .catch(err => {
        console.log(`my`, err)
      })

    axios
    .get("https://api.github.com/users/jTCode2408/followers")       
    .then(res => {
      console.log(`follower response`, res.data)
      this.setState({
        followers: res.data
      })        
    })
    .catch(err => {
      console.log(`follwoer`, err)
    })
  }

  render() {
    console.log(`rendering`)
    return (
      <div 
        className="App">
        <UserCards me={this.state.me}/>
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;