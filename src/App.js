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
    
    axios
      .get("https://api.github.com/users/jTCode2408")       
      .then(initialRes => {
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