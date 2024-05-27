const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('In middleware 1')
    next()
})

app.use((req, res) => {
    console.log('In middleware 2')
    res.send(`<h1>Hello from express</h1>`)
})

app.listen(8000, () =>{
    console.log('server is running on port 8000')
})