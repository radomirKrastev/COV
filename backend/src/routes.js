const express = require('express');
const router = express.Router();

router.use('/covid-questionnaire', require('./controllers/questionnaireController'));

module.exports = router;
