const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
const statsController = require("../controllers/statsController")


router.get("/topScorers" , statsController.getTopScorers)










module.exports = router
