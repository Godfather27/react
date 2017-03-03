import React from 'react';
// const log = console.log

const AddUser = ({newName, onChange, onClick}) => {
  return <div>
      <input value={newName} onChange={onChange} type="text" />
      <button onClick={onClick}>+</button>
    </div>
}

const List = ({entries}) => {
  return <div>
      {entries.map((entry, index) => <Person key={index} name={entry}/>)}
    </div>
}

const Person = ({name}) => <div className="person">Name: {name}</div>
Person.propTypes = {
  name: React.PropTypes.string
}

export {List, AddUser, Person}