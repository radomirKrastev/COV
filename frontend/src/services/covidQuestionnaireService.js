import api from "./api";

const covidQuestionnaireService = {
    respond: data => {
        return fetch(api.covidQuestionnaire, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(async res => {
                if (!res.ok) {
                    throw await res.json();
                }

                return res.json();
            })
    },
};

export default covidQuestionnaireService;
