const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://haridharsaun:hari1234@symptoms.ew9li.mongodb.net/symptoms-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB ✅"))
.catch(err => console.error("MongoDB Connection Error ❌", err));

// app.get('/getSymptoms',(req,res)=>{
//     UserModel.find()
//     .then(symptoms=>res.json(symptoms))
//     .catch(err=>res.json(err))
// })

app.post('/getSymptoms',async (req,res)=>{
    try{
        const symptom = req.body.symptom.replace(/\s+/g, "").toLowerCase();
        console.log(symptom);
        const result = await UserModel.findOne({symptom:symptom});

        if(result){
            res.json({disease:result.disease,advice:result.advice});
        }
        else{
            res.json({disease:"No matching disease found",advice:"Please consult a doctor"});
        }
    }
    catch(err)
    {
        res.status(500).json({error:err.message});
    }
})
app.listen(3001,()=>{
    console.log("server is running");
})