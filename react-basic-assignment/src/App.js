import './App.css';
import { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
      userNames:[
        {id:1,name: 'Shivang'},
        {id:2,name: 'Simon'},
        {id:3,name: 'Nitish'},
      ]
    }
    inputChangedHandler = (event)=>{
      this.setState({
        userNames:[
          {id:1,name: event.target.value},
          {id:2,name: 'Simon'},
          {id:3,name: 'Nitish'},
        ]
      })
    }
  render(){
    return (
      <div className="App">
        <UserInput username={this.state.userNames[0].name} changed={this.inputChangedHandler} />
        {
          this.state.userNames.map((username)=>{
            return <UserOutput key={username.id} userName={username.name} />
          })
        }
      </div>
    );
  }
}

export default App;
