import React, { useState } from 'react';

import SignupForm from './components/Form';
import { member } from './TeamData';

import './App.css';

function App() {

  const {teamMember, setTeamMember} = useState(member)
  // console.log(member)
  //Probably going to come back here and fix something with the key and value.
    

  return (
    <div className="App">
      <h1>Who's on the team</h1>
      <h3>Add a Team Member:</h3>
      <SignupForm />
      <h3>Team Member List</h3> 
      { console.log(member) }
      {/* {teamMember.map((people, index) =>(
        <div className="member-container">
          <h4>Name: {people.member.name}</h4>
          <p>Email: {people.member.email}</p>
          <p>Role: {people.member.role}</p>
        </div>
      ))} */}
        
    </div>
  );
}
export default App;

