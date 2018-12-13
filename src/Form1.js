import React,{Component} from 'react';

import {Form} from 'semantic-ui-react';

export default class Form1 extends Component{
	
	


	constructor(params) {
		super(params);


		this.state = {
			email:'',
			name1:'',
			pswd:'',
			cpswd:''
		};
	}

	change = (e, name) => {
		e.preventDefault();

		const targetName = e.target.name || name;

		let temp = {
			[targetName]: e.target.value
		} 

		console.log(e.target.name);

		this.setState(temp);
	}
	onSubmit = e => {
		e.preventDefault();
		if(this.state.pswd!==this.state.cpswd)
		alert("Password missmatch");
   else
	   console.log("Thanks");
	}

	render() {
   		return (
			<div >
				<form >
				<Form.Group size={"large"}>
					<Form.Input label='Email: '	
								placeholder="abc@efg.hij"
								name='email'
								pattern="[a-zA-Z0-9.]+@+[a-zA-Z0-9.]+.[a-zA-Z]{2,30}"
								className="App-form"  
								value={this.state.email} 
								onChange={e=>this.change(e)} 
								required="required"
								 />
								<br/>
					
					<Form.Input
							label='Name:' 
							pattern="[a-zA-Z]{3,30}"
							className="App-form"
							value={this.state.name1} 
							onChange={e=>this.change(e, 'name1')}
							required="required"
							/>
					<br/><br/>
					
        			<Form.Input label='Password: '
								name='pswd'
								className="App-form"
								value={this.state.pswd}
								type="password"
								onChange={e=>this.change(e)}
								required="required"
					/>
					<br/><br/>
        			<Form.Input label='Confirm Password: '
										name='cpswd'
										type="password"
										className="App-form"
										value={this.state.cpswd} 
										onChange={e=>this.change(e)}
										required="required"
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