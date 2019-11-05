import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { Container, Button, Form, FormGroup, Label, Input, Row, Col, Alert } from 'reactstrap';

export default class About extends Component {

	constructor(props) {
		super(props)

		this.state = {
			toggle: false
		};
	}

	render() {
		return (
			<div>
				<Header title={'Contact Us'} />
				<Container>
					<Row>
						<Col xs="4" />
						<Col>
							<Form style={{ margin: "30px 0px" }}>
								<FormGroup>
									<Label for="emailId">Email</Label>
									<Input type="email" name="email" id="emailId" placeholder="Dundie@is-the.best" />
								</FormGroup>
								<FormGroup>
									<Label for="usernameId">Username</Label>
									<Input type="username" name="username" id="usernameId" placeholder="Dundie 🔥" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleId">Message</Label>
									<Input type="textarea" name="text" id="exampleId" placeholder="Please send us your message 😄" />
								</FormGroup>
							</Form>
							<Button block style={{ margin: "20px 0" }} onClick={() => { this.setState({ toggle: true }) }} color="primary">Submit</Button>
						</Col>
						<Col xs="4">
							<Alert color="success" isOpen={this.state.toggle} toggle={() => {
								this.setState({ toggle: !this.state.toggle })
							}}>
								Form submited successfuly
     					 </Alert>
						</Col>
					</Row>
				</Container>
				<Footer redirectToHome={true} />
			</div>
		);
	}
}