const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const initDb = require('./db')
const productsRouter = require('./routes/products-router')

const app = express()
const apiPort = 3001

initDb()
    .then(() => {
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(cors())
        app.use(bodyParser.json())
        app.use('/', productsRouter)

        app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
    })
    .catch(error => console.error('Unable to start:', error))
