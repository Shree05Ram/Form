import React,{Component} from 'react';

import {Form} from 'semantic-ui-react';

export default class Form1 extends Component{
		
	state = {
		email:'',
		name1:'',
		pswd:'',
		cpswd:''
	};

	change = e => {
		this.setState({[e.target.name]:e.target.value});
	};

	validate = () => {
		let isError = false;
		let a=0;
		const errors = {
			emailError:"",
			pswdError:"",
		};

		if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email))) {
			isError = true;
			a=1;
		};
		
		if(!(/^[A-za-z ]*$/.test (this.state.name1))){
			isError = true;
			a=2;
		}

		if(this.state.pswd.length<4){
			isError = true;
			a=3;
		}

		if(this.state.pswd !==this.state.cpswd){
			isError = true;
			errors.emailError="Password missmatch";
			a=4;
		};
		this.setState({
			...this.state,
			...errors
		});

		return a;
	}

	onSubmit = e => {
		e.preventDefault();
		const err=this.validate();
		if(err){
			switch(err){
				case 1:alert("Invalid Email");
						break;
				case 2:alert("Name should contain only alphabets");
						break;
				case 3:alert("Password should have minimum 4 characters ");
						break;
				case 4:alert("Password mismatch ");
						break;
				default:alert("Unknown error");
			}
			
		}
		else {
			this.setState({
				email:'',
				name1:'',
				pswd:'',
				cpswd:''
			});
		};
	}

	render() {
   		return (
			<div >
				<form >
				<Form.Group size={"large"}>
					<Form.Input  label='Email: '	
								placeholder="abc@efg.hij"
								name='email'
								className="App-form"  
								value={this.state.email} 
								onChange={e=>this.change(e)} 
								errorText={this.state.emailError}/>
								<br/><br/>
					
					<Form.Input
							label='Name:' 
							placeholder='Full Name'
							name='name1'
							className="App-form"
							value={this.state.name1} 
							onChange={e=>this.change(e)}/>
					<br/><br/>
					
        			<Form.Input label='Password: '
								name='pswd'
								className="App-form"
								value={this.state.pswd}
								type="password"
								onChange={e=>this.change(e)}
					/>
					<br/><br/>
        			<Form.Input label='Confirm Password: '
										name='cpswd'
										type="password"
										className="App-form"
										value={this.state.cpswd} 
										onChange={e=>this.change(e)}
									 />
					<br/><br/>
					
					<Form.Button type="submit"
						disabled={! this.state.email
							|| !this.state.name1
							|| !this.state.pswd
							|| !this.state.cpswd
						}
						onClick={this.onSubmit}>Sign up</Form.Button>
					</Form.Group>
				 </form>
			</div>
    	);
	}
} 