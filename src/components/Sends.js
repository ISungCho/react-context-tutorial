import React, { Component } from 'react';
import { SampleConsumer } from '../contexts/sample';

class Sends extends Component {
	state = {
		input: ''
	}

	componentDidMount(){
		this.setState({
			input: this.props.value
		})
	}

	handleChange = (e) => {
		console.log(e.target.value)
		this.setState({ input: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.props)
		this.props.setValue(this.state.input)
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input value={this.state.input} onChange={this.handleChange}></input>
				<button type="submit">설정</button>
			</form>
		);
	}
}

const SendsContainer = () => (
	<SampleConsumer>
		{
			({state, actions}) =>(
				<Sends 
				value={state.value}
				setValue={actions.setValue}
				/>
			)
		}
	</SampleConsumer>
)

export default SendsContainer;