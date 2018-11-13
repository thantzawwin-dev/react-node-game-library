import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FIELDS } from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const renderReview = _.map(FIELDS, ({ label, name })=> {
		return(
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return(
		<div>
			<h4>Please confirm your entries.</h4>
			{renderReview}
			<button 
				className="yellow darken-3 btn-flat white-text"
				onClick={onCancel}
			>
				CANCEL
				<i className="material-icons right">undo</i>
			</button>

			<button
				className="green btn-flat white-text right"
				onClick={() => submitSurvey(formValues, history)}
			>
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));