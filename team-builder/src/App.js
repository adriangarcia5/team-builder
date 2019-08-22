import React, { useState } from 'react';

import SignupForm from './components/Form';
import TeamList from './components/TeamList';
import { people } from './TeamData';

import './App.css';

function App() {

  const [member, setMember] = useState(people);
  
  const [memberToEdit, setMemberToEdit] = useState();

  //Function that will add a new member to state(people). 
  const addMember = person => {
    setMember([...member, person])
  }

  return (
    <div className="App">
      <h1>Who's on the team</h1>
      <div className="app-container">
      <div className=" left-column">
      <h3>Add a Team Member</h3>
        <SignupForm 
          member={member}
          setMember={setMember}
          submitMember={addMember}
         />
      </div>
      <div className="right-column">
        <h3>Meet the Development Team</h3>
        <TeamList
          member={member}
          setMember={setMember}
          memberToEdit={memberToEdit}
          setMemberToEdit={setMemberToEdit}
        />
      </div>
      </div>
      
    </div>
  );
}
export default App;

