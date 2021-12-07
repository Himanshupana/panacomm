const express = require('express')
const router =  express.Router();

const questionController = require('../controllers/question.controller')

router.get('/',questionController.getAllQuestions)

router.post('/set-question',questionController.setQuestion)

module.exports = router;