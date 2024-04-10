import React,{useContext, useState} from 'react'
import UserContext from '../context/UserContext';
function Profile() {
    const {user}= useContext(UserContext);  //Yaha hum data retrieve kr rhe ha
    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div> 
}

export default Profile