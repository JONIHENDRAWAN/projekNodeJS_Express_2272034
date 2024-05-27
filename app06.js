const express = require('express')

const app = express()

const myRoutes = require('./routes/route.js')

app.use(express.urlencoded({
    extended: false
}))

app.use(myRoutes)

app.listen(8000, () =>{
    console.log('server is running on port 8000')
})