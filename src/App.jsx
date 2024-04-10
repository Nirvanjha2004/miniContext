import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
function App() {
  

  return (
    <UserContextProvider>
      <div>React API context with ChaiaurCode</div>
      <Profile/>
      <Login/>
    </UserContextProvider>
  )
}

export default App
