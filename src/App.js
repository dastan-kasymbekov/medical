import React, {useEffect} from "react";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import './App.css';
import Projects from "./Pages/Projects";
import Tasks from "./Pages/Tasks";
import Calendar from "./Pages/Calendar";
import Capabilities from "./Pages/Capabilities";
import Login from "./Pages/Login";

function App() {
  let location = useLocation()
  let navigate = useNavigate()
  useEffect(() => {
    if (location.pathname !== "/tasks" && location.pathname !== "/projects" && location.pathname !== "/calendar" && location.pathname !== "/capabilities") {
      navigate('/login')
    }
  }, [location.pathname, navigate])

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/capabilities" element={<Capabilities/>}/>
      </Routes>
    </>
  )
}

export default App;
