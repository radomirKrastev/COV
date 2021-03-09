const covidQuestionnaireData = require('../data/covidQuestionnaireData');

const saveResponse = responseInfo => covidQuestionnaireData.saveResponse(responseInfo);

module.exports = {
    saveResponse
};
