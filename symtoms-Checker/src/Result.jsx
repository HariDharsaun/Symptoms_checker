import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./result.css";
import axios from 'axios'

function Result() {
  const location = useLocation();
  const symptoms = location.state?.symptoms || "No symptoms provided";
  const [disease,setDisease ] = useState(["Loading...."]);
  const [advice,setAdvice] = useState(["Loading...."]);

  useEffect(()=>{
      if(symptoms !== "No symptoms provided"){
        axios.post('http://localhost:3001/getSymptoms',{symptom:symptoms})
        .then(response=>{
          setDisease(response.data.disease);
          setAdvice(response.data.advice);
        })
        .catch(error=>{
          console.error("Error fetching data:",error);
          setDisease("Error fetching disease");
          setAdvice("Error fetching advice");
        });
      }
 } ,[symptoms]);

  return (
    <>
    <motion.div
      className="results-container"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="header">Health Analysis</h2>

      <motion.div className="info-card">
        <h3>Symptom Entered</h3>
        <p>{symptoms}</p>
      </motion.div>

      <motion.div className="info-card">
        <h3>Possible Disease</h3>
        <p>{disease}</p>
      </motion.div>

      <motion.div className="advice">
        <h3>Health Advice</h3>
        <p>{advice}</p>
      </motion.div>

      <Link to="/home"><button className="button">Back</button></Link>
    </motion.div>
    </>
  );
}

export default Result;
