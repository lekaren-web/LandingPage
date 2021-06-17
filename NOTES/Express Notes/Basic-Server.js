const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))

app.get('/', (req,res)=>{
    res.send("<h1>Hello, Welcome to my basic Express Server</h1>")
})
app.listen(2000, ()=>{
    console.log("Listening on Port 2000")
})