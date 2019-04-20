import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Counter from './components/Counter';
import { SampleProvider } from './contexts/sample';

const App = () => {
  return (
    <SampleProvider>
      <div className="panes">
        <LeftPane />
        <RightPane />
      </div>
			<Counter/>
    </SampleProvider>
  );
};

export default App;