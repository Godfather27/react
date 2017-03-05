import React from 'react';
import {List, AddUser} from './User.jsx'
import {STUDENTS} from './fixtures.jsx'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: STUDENTS,
      currentName: '',
      activePerson: null
    }
  }

  filtered = () => {
    return this.state.entries.filter(e => {
      return e.name.toLowerCase().includes(this.state.currentName.toLowerCase())
    })
  }
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
  removeFilter = () => {
    this.setState({
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
      <h1>Personenverzeichnis</h1>
      <AddUser
        currentName={this.state.currentName}
        changeCurrentName={this.changeCurrentName}
        addPerson={this.addPerson}
        setActivePerson={this.setActivePerson}
        removeFilter={this.removeFilter}
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
