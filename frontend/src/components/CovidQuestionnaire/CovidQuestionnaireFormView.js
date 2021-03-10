import React from 'react';

import './CovidQuestionnaireFormView.scss';

const CovidQuestionnaireFormView = ({
    handleChange,
    handleSubmit,
    values
}) => (
    <form className="covid-questionnaire-form" autoComplete="off">

        <label htmlFor="questionOne" className="question"> Do you have a high temperature
        <div>
            <input type="radio" name="questionOne" value="yes" onChange={(e) => { handleChange(e) }} />
                Yes
            <input type="radio" name="questionOne" value="no" onChange={(e) => { handleChange(e) }} />
                No
        </div>
        </label>

        <label htmlFor="questionTwo" className="question"> Do you have a new continuous cough
        <div>
            <input type="radio" name="questionTwo" value="yes" onChange={(e) => { handleChange(e) }} />
                Yes
            <input type="radio" name="questionTwo" value="no" onChange={(e) => { handleChange(e) }} />
                No
        </div>
        </label>

        <div >
            <button type="button" onClick={handleSubmit}>Submit Answers</button>
        </div>
    </form>
);

export default CovidQuestionnaireFormView;
