import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {List, AddUser} from './User.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [
        { id: 0, name: 'Stefanie' },
        { id: 1, name: 'Sepp' },
        { id: 2, name: 'Alex' }
      ],
      currentName: '',
      activePerson: null
    }
  }

  filtered = () => this.state.entries.filter(e => e.name.includes(this.state.currentName))
  addPerson = (e) => {
    if(!(e.nativeEvent.key === "Enter" || e.nativeEvent.type === "click"))
      return
    let newEntry = {
      id: this.state.entries[this.state.entries.length - 1].id + 1,
      name: this.state.currentName
    }
    this.setState({
      entries: [...this.state.entries, newEntry],
      currentName: ''
    })
  }
  removePerson = id => {
    this.setState({
      entries: this.state.entries.filter((e) => e.id !== id)
    })
  }
  updateName = (id, e) => {
    this.setState({
      entries: this.state.entries.map(v => v.id === id ? {id: v.id, name: e.target.value} : v)
    })
  }
  setActivePerson = (id, e) => {
    this.setState({
      activePerson: id
    })
  }
  changeCurrentName = e => this.setState({currentName: e.target.value})

  render(){
    return <div>
      <h1>Welcome to react</h1>
      <AddUser
        currentName={this.state.currentName}
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
