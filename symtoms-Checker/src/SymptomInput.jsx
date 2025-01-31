import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { useNavigate } from "react-router-dom";

function SymptomInput() {
  const [symptoms, setSymptoms] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  const handleCheck = () => {
    if (symptoms.trim() === "") {
      setAlert("Please enter symptoms.");
    } else {
      setAlert("");
      navigate("/result", { state: { symptoms } }); 
    }
  };

  return (
    <>
    <motion.div
      className="main-container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="header">Enter a Symptom</h2>
      <motion.div className="input-card">
        <input
          className="input-field"
          type="text"
          placeholder="E.g., Fever, Cough"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button className="button" onClick={handleCheck}>Check</button>
        {alert && <p className="alert">{alert}</p>} {/* Display alert if empty */}
      </motion.div>
    </motion.div>
    </>
  );
}

export default SymptomInput;
