const express = require('express');
const router = express.Router();
const covidQuestionnaireService = require('../services/covidQuestionnaireService');

router.post('/', async (req, res) => {
    const responseInfo = { ...req.body };

    await covidQuestionnaireService.saveResponse(responseInfo);
    
    res.json({});
});

module.exports = router;
