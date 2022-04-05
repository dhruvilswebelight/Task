import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

const RegistrationPage = () => {
    const history = useHistory()
const[firstName, setFirstName] = useState("");
const[lastName, setLastName] = useState("");
const[email, setEmail] = useState("");
const[age, setAge] = useState("");

const validateForm = () => {
    if(firstName !== "" && lastName !== "" && email !== "" && age !== ""){
        alert("Registration successful")
        history.push('/Login-Page')
    }
    else{
        alert("firstName or lastName or email or age must be required")
    }
    
  }

    return(
        
        <form >
            <div>
                <label htmlFor="firstName">FirstName</label>
                <input type="text" name="firstName" id="firstName" autoComplete="off"
                 value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}/>
                
            </div>
            <div>
                <label htmlFor="lastName">LastName</label>
                <input type="text" name="lastName" id="lastName" autoComplete="off"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}/>
                
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" autoComplete="off"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
                
            </div>

            <div>
                <label htmlFor="age">Age</label>
                <input type="age" name="age" id="age" autoComplete="off"
                 value={age}
                 onChange={(e) => setAge(e.target.value)}/>
             
            </div>

            <button type="submit"  onClick={() => validateForm()}>Register</button>
        </form>
    )
}
export default RegistrationPage


