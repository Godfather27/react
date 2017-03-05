import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {List, AddUser} from './User.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: ['Stefanie', 'Sepp', 'Alex'],
      currentName: '',
      activePerson: null
    }
  }

  filtered = () => this.state.entries.filter((e) => e.includes(this.state.currentName))
  addPerson = () => {
    this.setState({
      entries: [...this.state.entries, this.state.currentName],
      newName: ''
    })
  }
  removePerson = (idx) => {
    this.setState({
      entries: this.state.entries.filter((e, i) => i !== idx)
    })
  }
  updateName = (idx, e) => {
    this.setState({
      entries: this.state.entries.map((v, i) => {
        return i === idx ? e.target.value : v
      })
    })
  }
  setActivePerson = (idx, e) => {
    this.setState({
      activePerson: idx
    })
  }
  changeCurrentName = (e)=> this.setState({currentName: e.target.value})

  render(){
    return <div>
      <h1>Welcome</h1>
      <AddUser
        value={this.state.newName}
        changeCurrentName={this.changeCurrentName}
        addPerson={this.addPerson}
        setActivePerson={this.setActivePerson}
      />
      <List
        entries={this.filtered()}
        removePerson={this.removePerson}
        updateName={this.updateName}
        activePerson={this.state.activePerson}
        setActivePerson={this.setActivePerson}
      />
    </div>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
