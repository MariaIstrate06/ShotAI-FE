import { Routes, Route, BrowserRouter, Switch } from "react-router-dom"
// import React, { useState } from 'react';
import Home from "./components/Home"
import Team from "./components/Team"
import Login from "./components/Login"


function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="team" element={ <Team/> } />
        <Route path="login" element={ <Login/> } />

      </Routes>
    </div>
  )
}

export default App