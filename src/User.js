import React from 'react';
// const log = console.log

const AddUser = ({currentName, changeCurrentName, addPerson, setActivePerson}) => {
  return <div className="add-user" onClick={setActivePerson.bind(this, null)}>
      <input className="pull-left" value={currentName} onChange={changeCurrentName} type="text" />
      <input type="button" onClick={addPerson} value="+"/>
    </div>
}

const List = ({entries, removePerson, updateName, activePerson, setActivePerson}) => {
  return <div>
      {
        entries.map((entry) => {
          return <Person
              key={entry.id}
              entry={entry}
              removePerson={removePerson.bind(this, entry.id)}
              updateName={updateName.bind(this, entry.id)}
              activePerson={activePerson}
              setActivePerson={setActivePerson}
            />
        })
      }
    </div>
}

const NameDisplay = ({updateName, name, activePerson, id, setActivePerson}) => {
  if(activePerson === id)
    return <input type="text" onChange={updateName} value={name}/>
  else
    return <p onClick={setActivePerson.bind(this, id)}>{name}</p>
}

const Person = ({entry, removePerson, updateName, activePerson, setActivePerson}) => {
  return <div className="person">
      <NameDisplay
        updateName={updateName}
        name={entry.name}
        activePerson={activePerson}
        id={entry.id}
        setActivePerson={setActivePerson}
      />
      <input
        type="button"
        className="pull-right"
        onClick={removePerson}
        value="x"
      />
    </div>
}
Person.propTypes = {
  name: React.PropTypes.string
}

export {List, AddUser, Person}