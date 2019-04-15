import React, { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
	state = {
		value: "기본값입니다."
	}
	// 임의로 설정해주는 객체
	// 나중에 변화를 일으키는 함수를들을 전달해줄 때, 함수 하나하나를 일일히 전달하는 것이 아니라,
	// 객체 하나로 한꺼번에 전달하기 위함이다. 
	actions = {
		setValue: (value) => {
			this.setState({ value });
		}
	}

	render() {
		const { state, actions } = this;
		const value = { state, actions };
		return (
			<Provider value={value}>
				{this.props.children}
			</Provider>
		)
	}
}

export { SampleProvider, SampleConsumer };
