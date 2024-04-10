import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');

    const {setUser}= useContext(UserContext);  //Ye jo user aur setUSer banaya tha na uska setUser hai...

    const handleSubmit= (e)=> {
        e.preventDefault(); //ye krna padta ha taki dusre jagah data na chala jaye
        setUser({username, password}); //Yaha se humne username aur password bhej diya
    }
  return (

    <div>
        <h2>LOGIN</h2>
        <input type="text" 
        value ={username} //Value bhi to pass krni padegi jo aayegi
        onChange={(e)=>{
            setUsername(e.target.value) //aur change hone pe state me bhi to change krna padega
        }}
        placeholder= "username"/>
        <input type="text"
         value ={password}
         onChange={(e)=>{
             setPassword(e.target.value)
         }} placeholder= "password"/>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login