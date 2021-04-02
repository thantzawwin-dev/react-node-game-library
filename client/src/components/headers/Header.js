import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';

class Header extends Component {

	renderLoginButton() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="3">
						<Link to="#">Other</Link>
					</li>,
					<li key="2">
						<Link to="#">Mini Game</Link>
					</li>,
					<li key="1">
						<Link to="#">Game</Link>
					</li>,
					<li key="0">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}

	render() {
		return (
			<div>
				<nav className="blue-grey">
					<Sidebar renderLoginButton={this.renderLoginButton()} auth={this.props.auth}/>

					<div className="nav-wrapper">

						<Link
							to={this.props.auth ? '/surveys' : '/'}
							className="brand-logo"
						>
							GAME
						</Link>

						<ul className="right hide-on-med-and-down">
							{this.renderLoginButton()}
						</ul>
					</div>

				</nav>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
