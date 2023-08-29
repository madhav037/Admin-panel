const express = require('express');
const cors = require('cors')
const checkLoginDetails = require('./sigin.js')
const app = express()

app.use(express.json());
app.use(cors())



app.get('/', (req,res) => {
    // res.json(database)
    res.json("HEllo")
    console.log("listening on port 5000")
})

app.post('/', (req,res) => {
    const emailNumber = req.body.emailNumber
    const password = req.body.password
    if (checkLoginDetails(emailNumber,password)) {
        res.json('success')
    }else {
        res.status(400).json("error login in")
    }
})
app.listen(5000)