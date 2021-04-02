import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './headers/Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

const Test = () => <div>TEST</div>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div className="">
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route path="/surveys/new" component={Test} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(App);
