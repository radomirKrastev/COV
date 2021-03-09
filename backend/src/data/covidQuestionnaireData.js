const { getDb, ObjectID } = require('./db');

const saveResponse = responseInfo => getDb()
    .collection('covidQuestionnaireResponses')
    .insertOne(responseInfo);

module.exports = {
    saveResponse
};
