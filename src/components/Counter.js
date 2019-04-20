import React, { Component } from 'react';

class Counter extends Component {
	state = {
		number: 1
	}

	handleIncrement = () => {
		this.setState(
			({ number }) => ({ number: number + 1 })
		)
	}

	handleDecrement = () => {
		this.setState(
			({ number }) => ({ number: number - 1 })
		)
	}

	render() {
		return (
			<div>
				<h1>{this.state.number}</h1>
				<button onClick={this.handleIncrement}>+</button>
				<button onClick={this.handleDecrement}>-</button>
			</div>
		)
	}
}

export default Counter;