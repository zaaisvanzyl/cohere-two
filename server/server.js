require('dotenv').config()

const generalRoutes = require('./routes/baseRoutes')

const express = require('express')

const cors = require('cors')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cors())

// routes
app.use('/api', generalRoutes)


// listen for requests
app.listen(4009, () => {
    console.log('listening on port 4009')
    app.get('/', (req, res) => {
        res.send('hello to API')
    })
})