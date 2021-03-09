module.exports = {
    development: {
        port: process.env.PORT || 5000,
        //Private key should be hidden 
        privateKey: 'COVID-QUESTIONNAIRE',
        databaseUrl: 'mongodb://localhost:27017/Covid-Questionnaire'
    },
    production: {}
};
