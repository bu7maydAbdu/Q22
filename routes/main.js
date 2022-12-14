const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")


router.get("/", mainController.getMain)
router.get("/allTeams", mainController.getAllTeams)
router.get("/groups", mainController.getAllGroups)
router.get("/allMatches", mainController.getAllMatches)










module.exports = router
