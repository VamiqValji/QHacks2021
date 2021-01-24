import React from "react";
import './Restaurants.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


  
 export default function Charity(){
  const submit = (e) => {
  
    
    let charfullName = document.getElementById("charfullName").value;
    let charityName = document.getElementById("charityName").value;
    let charPostalCode = document.getElementById("charPostalCode").value;
    let charAddress = document.getElementById("charAddress").value;
    let charPhoneNumber = document.getElementById("charPhoneNumber").value;
    
    console.log(charfullName);
    console.log(charityName);
    console.log(charPostalCode);
    console.log(charAddress);
    console.log(charPhoneNumber);
}



  
  return (

  
    <div className="component3">

      <form onSubmit = {submit} className = "restaurantsignup">
        <h1 className ="restaurant">Charity Sign Up</h1> 
        
    
        <TextField  className = "fullName" id="charfullName" label="Full Name" name = "fullName"/>
        <TextField className = "fullName"  id="charityName" label="Charity Name" />
        <TextField  className = "fullName" id="charPostalCode" label="Charity Postal Code" />
        <TextField  className = "fullName"  id="charAddress" label="Charity Address" />
        <TextField  className = "fullName"  id="charPhoneNumber" label="Phone Number" />
     <Button type = "submit" className = "fullButton"  variant="contained" color="primary">
        Submit Application
      </Button>
      

      
      </form>
    </div>
  );
};