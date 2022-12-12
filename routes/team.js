const express = require("express")
const router = express.Router()
const teamsController = require("../controllers/teamsController")

router.get("/:id" , teamsController.getTeam)



module.exports = router