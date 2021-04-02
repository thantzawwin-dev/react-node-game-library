import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";

class Sidebar extends Component {
	componentDidMount() {
		M.Sidenav.init(document.querySelectorAll('.sidenav'), null);
	}

	renderUserView() {
		switch(this.props.auth) {
			case null:
				return;
			case false:
				return;
			default:
				return (
					<li>
						<div className="user-view">
							<div className="background">
					      <img src={require('../../images/background.png')} alt="user_background" />
					    </div>
				      <Link to="#">
				      	<img className="circle" src={require('../../images/tiger.png')} alt="user_photo" />
				      </Link>
				      <Link to="#">
				      	<span className="green-text name">Tigercat</span>
				      </Link>
				      <Link to="#">
				      	<span className="green-text email">silenceslider@gmail.com</span>
				      </Link>
						</div>
					</li>
				);
		}
	} 

	render() {
		return(
			<div>
				<Link to="#" data-target="slide-out" className="sidenav-trigger">
					<i className="material-icons">menu</i>
				</Link>

				<ul id="slide-out" className="sidenav">

					<li>
						<div>
							<Link to="#" className="sidenav-close green-text">
								GAME
								<i className="material-icons right">arrow_forward</i>
							</Link>
						</div>
					</li>

					{this.renderUserView()}

					<li>
						<ul className="">
							{this.props.renderLoginButton}
						</ul>
					</li>

				</ul>

			</div>
		);
	}
}

export default Sidebar;