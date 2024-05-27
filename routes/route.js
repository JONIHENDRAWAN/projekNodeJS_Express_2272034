const express = require('express')

const router = express.Router()

router.get('/page1', (req, res) => {
    res.send(`
    <form method="post" action="/page2">
        <label for="name-id">Name</label>
        <input type="text" name="name" id="name-id" autofocus>
        <button type="submit">Submit</button>
    </form>
    `)
})

router.post('/page2', (req, res) => {
    console.log(req.body)
    res.send(`
        <h1>Hello from express page 2</h1>
        <p>Hello, ${req.body.name}</P>
    `)
})

router.get('/', (req, res, next) => {
    res.send(`<h1>Hello from express</h1>`)
})

module.exports = router