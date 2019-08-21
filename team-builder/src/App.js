import React, { useState } from 'react';

import SignupForm from './components/Form';
import TeamList from './components/TeamList';
import { members } from './TeamData';

import './App.css';

function App() {

  const {teamMember, setTeamMember} = useState([])
  console.log(members)
  //Probably going to come back here and fix something with the key and value.
    
  return (
    <div className="App">
      <h1>Who's on the team</h1>
      <h3>Add a Team Member:</h3>
      <SignupForm 
          teamMember={teamMember}
          setTeamMember={setTeamMember}
      />
      <TeamList
          teamMember={teamMember}
          setTeamMember={setTeamMember}
      /> 
    </div>
  );
}
export default App;



