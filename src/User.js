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
        entries.map((entry, index) => {
          return <Person
              key={index}
              name={entry}
              removePerson={removePerson.bind(this, index)}
              updateName={updateName.bind(this, index)}
              index={index}
              activePerson={activePerson}
              setActivePerson={setActivePerson}
            />
        })
      }
    </div>
}

const NameDisplay = ({updateName, name, activePerson, index, setActivePerson}) => {
  if(activePerson === index)
    return <input type="text" onChange={updateName} value={name}/>
  else
    return <p onClick={setActivePerson.bind(this, index)}>{name}</p>
}

const Person = ({name, removePerson, updateName, activePerson, index, setActivePerson}) => {
  return <div className="person">
      <NameDisplay
        updateName={updateName}
        name={name}
        activePerson={activePerson}
        index={index}
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