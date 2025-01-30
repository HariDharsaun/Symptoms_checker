const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// MongoDB connection
mongoose.connect("mongodb+srv://haridharsaun:hari1234@symptoms.mongodb.net/Symptoms-checker-DB?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Define the Schema for Symptoms, Diseases, and Advice
const healthSchema = new mongoose.Schema({
  symptoms: [String],
  diseases: [String],
  advice: String,
});

const HealthData = mongoose.model("HealthData", healthSchema);

// Route to check symptoms and fetch related data
app.post("/check-symptoms", async (req, res) => {
  const symptoms = req.body.symptoms;
  try {
    const data = await HealthData.find({ symptoms: { $in: symptoms } });
    if (data.length > 0) {
      res.json({
        advice: data[0].advice,
        diseases: data[0].diseases,
      });
    } else {
      res.status(404).json({ advice: "No matching data found.", diseases: [] });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ advice: "Error fetching data from the database." });
  }
});

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
