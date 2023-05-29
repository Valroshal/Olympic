require('dotenv').config()
const express = require("express")
const { API_PORT } = process.env
const port = process.env.PORT || API_PORT

const app = express()
const cors = require("cors")

const { connectToDatabase } = require('./services/database')
const sportsmenController = require("./model/sportsmenController")
const bodyParser = require('body-parser')

app.use(cors())

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Connect to the database
connectToDatabase().then(() => {
    // Start the server
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})

// Routes
//get sportsmen
app.get('/get_sportsmen', sportsmenController.getSportsmen)

//add sportsmen
app.post('/add_sportsmen', sportsmenController.addSportsmen)
