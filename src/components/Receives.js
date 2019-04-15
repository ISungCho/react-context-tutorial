import React from 'react';
import { SampleConsumer } from '../contexts/sample'

const Receives = () => {
	return (
		<SampleConsumer>
			{
				// render props: https://reactjs.org/docs/render-props.html#using-props-other-than-render
				(sample) => (
					<div>현재 설정된 값: {sample.state.value}</div>
				)
			}
		</SampleConsumer>

	);
};

export default Receives;