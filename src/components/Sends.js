import React, { Component } from 'react';
import { useSample } from '../contexts/sample';

class Sends extends Component {
	state = {
		input: ''
	}

	componentDidMount(){
		this.setState({
			input: this.props.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.setValue(this.state.input)
	}

	handelChange = (e) => {
		console.log(e.target.value)
		this.setState({ input: e.target.value })
	}

	render() {
		return <form onSubmit={this.handleSubmit}>
			<input onChange={this.handelChange}></input>
			<button type="submit">설정</button>
		</form>
	}
}
export default useSample(Sends);