import React from 'react';

const CovidQuestionnaireFormView = ({
    handleChange,
    handleSubmit,
    values
}) => (
    <form className="covid-questionnaire-form" autoComplete="off">

        <div className="form-control">

            <label htmlFor="questionOne">Do you have a high temperature</label>
            <select
                name="questionOne"
                className="covid-questionnaire-option"
                onChange={(e) => {
                    handleChange(e);
                }}
                value={values.questionOne}
            >
                <option disabled defaultValue=""></option>
                <option value={'yes'}>Yes</option>
                <option value={'no'}>No</option>
            </select>

            <label htmlFor="questionOne">Do you have a new continuous cough</label>
            <select
                name="questionTwo"
                className="covid-questionnaire-option"
                onChange={(e) => {
                    handleChange(e);
                }}
                value={values.questionTwo}
            >
                <option disabled defaultValue=""></option>
                <option value={'yes'}>Yes</option>
                <option value={'no'}>No</option>
            </select>
        </div>

        <div >
            <button type="button" onClick={handleSubmit}>Submit Answers</button>
        </div>
    </form>
);

export default CovidQuestionnaireFormView;
