import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
    const history = useHistory()
const[username, setUsername] = useState("");
const[password, setPassword] = useState("");
const[password1, setPassword1] = useState(false);

const validateForm = () => {
    if(username !== "" && password !== ""){
        alert("Login successful")
        history.push('/Registration-Page');
    
    }
    else{
        alert("UserName or password must be required")
    }
    
  }

 const showPassword = (e) => {
     e.preventDefault()
   setPassword1(true)
  }
    return(
        // alert(password1),
        <form  >
            <div>
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" autoComplete="off"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}/>
                
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type = {password1 ? "text"  : "password"} name="password" id="password" autoComplete="off"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
             
            </div>

            <button type="submit"  onClick={() => validateForm()}>Login</button>
            <button type="Show Password"  onClick={(e) => showPassword(e)}>Show Password</button>
        </form>
    )
}
export default LoginPage

