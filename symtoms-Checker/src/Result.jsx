import React from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import "./result.css";

function Result() {
  const location = useLocation();
  const { symptoms, diseases = ["No data available"], advice = "No advice available" } = location.state || {};

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
        <h3>Symptoms Entered</h3>
        <p>{symptoms || "No symptoms provided"}</p>
      </motion.div>

      <motion.div className="info-card">
        <h3>Possible Diseases</h3>
        <ul>
          {diseases.map((disease, index) => (
            <li key={index}>{disease}</li>
          ))}
        </ul>
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
