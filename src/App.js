import React, { useState } from "react";
import ReactDOM from "react-dom"
import {useForm} from "react-hook-form"
import "./styles.css";

function App() {
  
  const[errors,setErrors]= useState({})
  const [formData,setFormData] = useState({
    username:'',
    age:0,
    remember:false
  })


  function onChange ({target}) {
    const value=target.type==="checkbox" ?target.checked:target.value;
    setFormData(prevState=>({
      ...prevState,
      [target.name] :value
    }))
  }

  function onSubmit (event){
    event.preventDefault()
    validate(formData)?console.log(formData):console.log("invalid");

    
  }

  function validate({username}){
    const valid = username && username.length >3; 
    if(!valid){
      setErrors({username:true})
    }else{
      setErrors({})
    }
    return valid;
  }

  return (
    <form className="App" onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      {/* <label>First Name:</label>
      <input name="firstName" value={formData} />

      <label>Last Name:</label>
      <input name="firstName" value={formData} />

      <label>Gender</label>
      <select name="gender">
        <option>Select...</option>
        <option>Male</option>
        <option>Female</option>
      </select> */}

      <label>Username</label>
      <input type = "text" name="username" value={formData.username} onChange={onChange}/>
      {errors.username && <p>Username Invalid</p>}

      <label>Age</label>
      <input type="number" name="age" value={formData.age} onChange={onChange}/>

      {/* <label>About you</label>
      <textarea name="about you" /> */}
      <span>
      <input type="checkbox" name="remember" checked={formData.remember} onChange={onChange}/>
      </span>
      <span>
      <label>Remember me</label>
      </span>
      <input type="submit" />
    </form>
  );
}

export default App;
