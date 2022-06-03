const express = require('express')
const router = express.Router()
const ServerController = require("../controllers/server.controller")

router.post("/register", ServerController.register)

module.exports = router