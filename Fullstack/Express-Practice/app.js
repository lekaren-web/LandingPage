const express = require('express')

const app = express()

app.get('/', (req, res)=> {
    res.send('<h1>HELLO ITS ME</h1>')
})

app.get('/puppies', (req, res)=> {
    res.send('<h1>Puppies!!</h1>')
})

app.get('/kittens', (req, res)=> {
    res.send('<h1>Kittens!!</h1>')
})

app.listen(3000,()=>{
    console.log('server listening')
})