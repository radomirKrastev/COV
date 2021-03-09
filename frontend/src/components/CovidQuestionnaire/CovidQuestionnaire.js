import React from 'react';
import { Formik } from 'formik';
import CovidQuestionnaireFormView from './CovidQuestionnaireFormView';
import { respondToQuestionnaire } from '../../actions/covidQuestionnaireActions';

const CovidQuestionnaire = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    questionOne: '',
                    questionTwo: '',
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    respondToQuestionnaire(values);
                }}
            >
                {(props) => <CovidQuestionnaireFormView {...props} />}
            </Formik>
        </div>
    );
};

export default CovidQuestionnaire;
