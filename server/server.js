const express = require('express')
const cors=require('cors')
const app = express()

app.use(cors())

app.get("/vi/api/user",(req,res)=>{
    res.json({"users":["userOne","userTwo","userThree"]})
})

app.listen(5000,()=>{
    console.log("Server started on port 5000")
})