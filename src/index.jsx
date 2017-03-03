import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {List, AddUser} from './User'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: ['Stefanie', 'Sepp', 'Alex'],
      currentName: ''
    }
  }
  addName = () => {
    this.setState({
      entries: [...this.state.entries, this.state.currentName],
      newName: ''
    })
  }
  changeCurrentName = (e)=> this.setState({currentName: e.target.value})

  render(){
    return <div>
      <h1>Welcome</h1>
      <AddUser value={this.state.newName} onChange={this.changeCurrentName} onClick={this.addName}/>
      <List entries={this.state.entries}/>
    </div>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
