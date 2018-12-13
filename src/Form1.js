import React,{Component} from 'react';

import {Form, Grid, Segment, Message} from 'semantic-ui-react';

export default class Form1 extends Component{
		
	state = {
		email:'',
		userName:'',
		password:'',
		confirmPassword:'',
		errorMessage: '',
		errorInEmail: false
	};

	change = e => {
		this.setState({[e.target.name]:e.target.value});
	};

	clearErrorMessage = () => {
		setTimeout(() => {
			this.setState({
				errorMessage: ""
			});
		}, 5000);
	}

	validate = () => {
		if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email))) {
			this.setState({
				errorInEmail: true,
				errorMessage: "Invalid Email"
			}, () => {
				this.clearErrorMessage();
			});
		} else if (!(/^[A-za-z ]*$/.test(this.state.userName))) {
			this.setState({
				errorMessage: "Name should contain only alphabets"
			}, () => {
				this.clearErrorMessage();
			});
		} else if (this.state.password.length < 4) {
			this.setState({
				errorMessage: "Password should have minimum 4 characters"
			}, () => {
				this.clearErrorMessage();
			});
		} else if (this.state.password !== this.state.confirmPassword) {
			this.setState({
				errorMessage: "Password mismatch"
			}, () => {
				this.clearErrorMessage();
			});
		} else {
			this.setState({
				errorMessage: "Unknown error"
			}, () => {
				this.clearErrorMessage();
			});
		}
	}

	onSubmit = e => {
		e.preventDefault();
		this.validate();
	}

	render() {
   		return (
			<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Form size='large' error>
						<Segment stacked>
							<Form.Input
								label='Email'
								name='email'
								value={this.state.email} 
								onChange={e=>this.change(e)} 
								error={this.state.errorInEmail}
							/>
							<Form.Input
								label='Name'
								name='userName'
								value={this.state.userName} 
								onChange={e=>this.change(e)}
							/>
							<Form.Input 
								label='Password'
								name='password'
								value={this.state.password}
								type="password"
								onChange={e=>this.change(e)}
							/>
							<Form.Input 
								label='Confirm Password'
								name='confirmPassword'
								type="password"
								value={this.state.confirmPassword} 
								onChange={e=>this.change(e)}
							/>
							<Form.Button type="submit"
								disabled={!this.state.email || !this.state.userName || !this.state.password || !this.state.confirmPassword}
								onClick={this.onSubmit}
							>
								Sign up
							</Form.Button>
							{ this.state.errorMessage &&
								<Message
									error
									header='Error'
									content={this.state.errorMessage}
								/>
							}
						</Segment>
					</Form>
				</Grid.Column>
			</Grid>
    	);
	}
} 