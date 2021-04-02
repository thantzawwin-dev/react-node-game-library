import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";

class Dashboard extends Component {
	componentDidMount() {
		M.Tabs.init(document.querySelectorAll('.tabs'), null);
	}
	render() {
		return (
			<div>

				<div className="fixed-action-btn">
				  <Link to="/surveys/new" className="btn-floating btn-large">
				    <i className="material-icons">add</i>
				  </Link>
				</div>
			</div>
		);
	}
}

export default Dashboard;
