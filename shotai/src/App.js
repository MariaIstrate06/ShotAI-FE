import { Routes, Route } from "react-router-dom"
import "./App.css"
import './variables.css'
import AddMatch from "./pages/addMatch/AddMatch"
import ChangePassword from "./pages/changePassword/ChangePassword"
import EmailValidation from "./pages/emailValidation/EmailValidation"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Matches from "./pages/matches/Matches"
import MatchStatistics from "./pages/matchStatistics/MatchStatistics"
import Player from "./pages/player/Player"
import Reports from "./pages/reports/Reports"
import SignUp from "./pages/signup/SignUp"
import Team from "./pages/team/Team"
import TeamStats from "./pages/teamStats/TeamStats"
import Profile from "./pages/profile/Profile"
import React from "react"
import ForgotPassword from "./pages/forgotPassword/ForgotPassword"
import NavBar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="add-match" element={<AddMatch />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="email-validation" element={<EmailValidation />} />
        <Route path="login" element={<Login />} />
        <Route path="matches" element={<Matches />} />
        <Route path="matches-statistics" element={<MatchStatistics />} />
        <Route path="player/:playerId" element={<Player />} />
        <Route path="profile" element={<Profile />} />
        <Route path="reports" element={<Reports />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="team" element={<Team />} />
        <Route path="team-stats" element={<TeamStats />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  )
}

export default App