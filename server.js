const express = require("express")
const axios = require("axios")
const PORT = 8000
const app = express()
const cors = require("cors")
require('dotenv').config({path: './config/.env'})



app.use(cors())



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const token = process.env.token
const baseUrl = process.env.baseUrl
const url = `${baseUrl}/standings`
const teams = `${baseUrl}/teams`


app.get("/", (req , res) => {
    axios.get(teams,{
        headers: {
            "X-Auth-Token" : token
        }
    })
    .then((response) => {
        console.log(response.data)
    })
    axios.get(url,{
        headers: {
            "X-Auth-Token" : token
        }
    })
    .then((response) => {
        console.log(response.data)
    })
    res.render("index.ejs")
})













app.listen(PORT , () => {
    console.log("server is running ")
})