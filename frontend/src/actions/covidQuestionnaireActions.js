import covidQuestionnaireService from '../services/covidQuestionnaireService';

export const respondToQuestionnaire = async respondData => {
    try {
        await covidQuestionnaireService.respond(respondData);
    } catch (err) {
        console.log(err);
    }
};
