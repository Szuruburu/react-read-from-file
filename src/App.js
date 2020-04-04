import React from 'react';
import FileReader from './components/FileReaderFunc';
//import FileReader from './components/FileReaderClass';

function App() {
	var myTxt = require("./foo.txt");
	return (
		<pre>
			<FileReader
				txt={myTxt}
			/>
		</pre>
	);
}

export default App;
