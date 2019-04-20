import React from 'react';
import { useAnother } from '../contexts/another';

const Counter = ({ number, increment, decrement }) => {
	return (
		<div>
			<h1>{number}</h1>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
		</div>
	)
}

export default useAnother(Counter);