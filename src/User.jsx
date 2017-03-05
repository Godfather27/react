import React from 'react';

const AddUser = ({currentName, changeCurrentName, addPerson, setActivePerson, removeFilter}) => {
  return <div>
      <div className="add-user" onClick={setActivePerson.bind(this, null)}>
        <input
          className="pull-left"
          value={currentName}
          onChange={changeCurrentName}
          type="text"
          onKeyUp={addPerson}
        />
        <input type="button" onClick={addPerson} value="+"/>
      </div>
      <DeleteFilter currentName={currentName} removeFilter={removeFilter}/>
    </div>
}

const DeleteFilter = ({removeFilter, currentName}) => {
  if (currentName !== "")
    return <div className="remove-filter" onClick={removeFilter}>remove filter (x)</div>
  return null
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