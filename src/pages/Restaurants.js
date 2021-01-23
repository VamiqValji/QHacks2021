import React from "react";
import './Restaurants.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Component3 = ({
  
}) => {
  return (
    <div className="component3">
      <form className = "restaurantsignup">
        <h1 className ="restaurant">Restaurant Sign Up!</h1> 
    
        <TextField className = "fullName" id="standard-basic" label="Full Name" />
        <TextField className = "fullName"  id="standard-basic" label="Restaurant Name" />
        <TextField className = "fullName" id="standard-basic" label="Restaurant Postal Code" />
        <TextField className = "fullName"  id="standard-basic" label="Address" />
        <TextField className = "fullName"  id="standard-basic" label="Restaurant Address" />
        <TextField cclassName = "fullName"  id="standard-basic" label="Phone Number" />
      
     <Button className = "fullName" variant="contained" color="primary">
        Submit Application
      </Button>
      

      
      </form>
    </div>
  );
};

export default Component3
