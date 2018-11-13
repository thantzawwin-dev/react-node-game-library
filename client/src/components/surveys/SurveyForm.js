import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import { FIELDS } from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({label, name}) => {
			return (
				<Field 
					key={name}
					type="text"
					label={label}
					name={name} 
					component={SurveyField}
				/>
			);
		})
	}
	render() {
		return(
			<div>
				<form 
					onSubmit={this.props.handleSubmit(this.props.onSubmitSurvey)}
				>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
						<i className="material-icons right">close</i>
					</Link>
					<button className="teal btn-flat right white-text">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients);
	_.each(FIELDS, ({ label, name }) => {
		if(!values[name]) {
			errors[name] = `You must provide ${name}`;
		}
	})
	
	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false,
})(SurveyForm);