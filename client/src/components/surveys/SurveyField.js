import React from 'react';

export default ({ input, label, meta: {touched, error} }) => {
	return(
		<div>
			<label>{label}</label>
			<input {...input} style={{marginBottom:'0px'}} />
			<div className="red-text" style={{height:'40px'}} >
				{ touched && error }
			</div>
		</div>
	);
}