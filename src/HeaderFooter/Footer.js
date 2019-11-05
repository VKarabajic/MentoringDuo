import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Divider from './Divider'

class Footer extends Component {

	render() {
		let route = this.props.routeName === undefined ? 'home' : this.props.routeName

		return (
			<>
				<div className='footer'>
					<div>
						{this.props.redirectToHome &&
							<div className={'footer-link'}>
								<Link to={`/${route}`}>
									Redirect to {route}
								</Link>
							</div>
						}
					</div>

				</div>
				<Divider useFor={'footer'}></Divider>
			</>
		);
	}
}
export default Footer;