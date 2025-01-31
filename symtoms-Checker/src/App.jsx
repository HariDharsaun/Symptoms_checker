import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SymptomInput from "./SymptomInput";
import Result from "./Result";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <>
    <div className="nav"><div className="logo"><img src=".src/assets/logo.png"></img></div><h2>Symptoms Checker</h2></div>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<SymptomInput />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
