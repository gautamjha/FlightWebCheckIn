import logo from './logo.svg';
import React from 'react'
import './App.css';
import Flightsearch from './component/FlightSearch'
import UserInfo from './component/UserInfo'
import Confirmation from './component/Confirmation'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Flightsearch />} />
          <Route path="/UserInfo/:id" element={<UserInfo />} />
          <Route path="/Confirmation" element={<Confirmation />} />
        </Routes>
    </div>
  );
}

export default App;
