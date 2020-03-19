import React from 'react';
import TextFileReader from './TextFileReader';

function App() {
	var myTxt = require("./foo.txt");
	return (
		<pre>
			<TextFileReader
				txt={myTxt}
			/>
		</pre>
	);
}

export default App;
