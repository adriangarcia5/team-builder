import React, { useState } from 'react';
import SignupForm from './components/Form';
import './App.css';


function App() {

  const {teamMember, setTeamMember} = useState({key:"value"})
  //Probably going to come back here and fix something with the key and value.

  return (
    <div className="App">
      <h1>Our Team</h1>
      <h3>Add a Team Member:</h3>
      <SignupForm />
      <h3>Team Member List</h3>
      <div>
        <h4>Name: Adrian</h4>
        <p>Email: Adrian@this.com</p>
        <p>Role: ME</p>
      </div>
      <div>
        <h4>Name: Carlos</h4>
        <p>Email: Carlos@is.com</p>
      <p>Role: Myself</p>
      </div>
      <div>
      <h4>Name: Julia</h4>
      <p>Email: Julia@a.com</p>
      <p>Role: AND</p>
      </div>
      <div>
      <h4>Name: Julio</h4>
      <p>Email: Julio@test.com</p>
      <p>Role: I</p>
      </div>
    </div>
  );
}

export default App;