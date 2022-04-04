import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
    const history = useHistory()
const[username, setUsername] = useState("");
const[password, setPassword] = useState("");

    return(
        
        <form action="">
            <div>
                <lable htmlFor="username">username</lable>
                <input type="text" name="username" id="username" autoComplete="off"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}/>
                
            </div>

            <div>
                <lable htmlFor="password">Password</lable>
                <input type="password" name="password" id="password" autoComplete="off"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
             
            </div>

            <button type="submit" onClick={() => history.push('/')}>Login</button>
        </form>
    )
}
export default LoginPage