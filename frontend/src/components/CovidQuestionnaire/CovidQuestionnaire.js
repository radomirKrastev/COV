import React from 'react';
import { Formik } from 'formik';
import CovidQuestionnaireFormView from './CovidQuestionnaireFormView';

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
                    console.log(values);
                }}
            >
                {(props) => <CovidQuestionnaireFormView {...props} />}
            </Formik>
        </div>
    );
};

export default CovidQuestionnaire;
