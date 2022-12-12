const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")


router.get("/", mainController.getMain)
router.get("/allTeams", mainController.getAllTeams)









module.exports = router
