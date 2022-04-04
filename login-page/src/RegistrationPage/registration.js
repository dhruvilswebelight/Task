import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

const RegistrationPage = () => {
    const history = useHistory()
const[firstName, setFirstName] = useState("");
const[lastName, setLastName] = useState("");
const[email, setEmail] = useState("");
const[age, setAge] = useState("");



    return(
        
        <form action="">
            <div>
                <lable htmlFor="firstName">FirstName</lable>
                <input type="text" name="firstName" id="firstName" autoComplete="off"
                 value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}/>
                
            </div>
            <div>
                <lable htmlFor="lastName">LastName</lable>
                <input type="text" name="lastName" id="lastName" autoComplete="off"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}/>
                
            </div>
            <div>
                <lable htmlFor="email">Email</lable>
                <input type="email" name="email" id="email" autoComplete="off"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
                
            </div>

            <div>
                <lable htmlFor="age">Age</lable>
                <input type="age" name="age" id="age" autoComplete="off"
                 value={age}
                 onChange={(e) => setAge(e.target.value)}/>
             
            </div>

            <button type="submit" onClick={() => history.push('/Registration-Page')}>Login</button>
        </form>
    )
}
export default RegistrationPage