const http = require('http')
const express = require('express')

const app = express()

const server = http.createServer()
server.listen(8000, () =>{
    console.log('server is running on port 8000')
})