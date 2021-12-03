const express = require('express')
const router = express.Router()

const ansController =  require('../controllers/answer.controller')

router.post('/',ansController.getAllAnswers)
module.exports = router