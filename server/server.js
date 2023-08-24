const express = require('express');

const app = express()


app.get('/', (req,res) => {
    res.json("HEllo")
    console.log("listening on port 5000")
})
app.listen(5000)