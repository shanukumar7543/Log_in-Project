import React, { useEffect,useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';
import { Input } from "@mui/material";

function App() { 
  let [name, setName] = useState('');
  let [lastname, setLastName] = useState('');
  let [Email, setEmail] = useState('');
 
  function Done() {
   return(
     document.write("You are Sucessfully Ragister")
 )}

 function Error() {
  return(
    document.write("You are not Ragister")
)}
 
  function myInput(event){
   console.log(event.target.name)
   if (event.target.name === "firstname")
   setName(event.target.value);
   if (event.target.name === "lastname")
   setLastName(event.target.value);
   if (event.target.name === "Email")
   setEmail(event.target.value);
 }
 
  return (
    <div className="App">
      <header className="App-header">
        <div className='shanu'>
        <h1>Register</h1>
        <h6>Create your account. It's free and only takes a minute.</h6>
        <div class="container">
          <lable>First Name</lable>
          < input type="text"
                 name="firstname"
                 placeholder='Enter your First Name'
                 value={name}
                 onChange={myInput}
                 />
                 <br/><br/>
          <lavel>Last Name</lavel>
          < input
                type="text"
                name="lastname"
                placeholder="Enter your Last Name"
                value={lastname}
                onChange={myInput}
                />
                <br/><br/>
                <lavel>Email </lavel>
          < input
                type="text"
                name="Email"
                placeholder="Enter your Email id"
                value={Email}
                onChange={myInput}
                /><br></br>

                <button className="prince"
               onClick={Done} >Submit</button>
                
                <button className="sinha"
               onClick={Error} >Cancel</button>
                
  <div className="mob">
            <p>Full Name: {name } {lastname}</p>
            <p>@: {Email}</p>
            </div>
</div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
