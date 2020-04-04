import React, { useState, useEffect } from 'react';

/*
	Read a text file and out put the content.

	Example Usage:
	var myTxt = require("./myTxt.txt");
	...
	<TextFileReader
		txt={myTxt}
	/>
*/

const FileReader = ({ filePath }) => {
	const [text, setText] = useState('');
	console.log(filePath);

	const readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					setText(allText);
				}
			}
		};
		rawFile.send(null);
	};

	useEffect(() => {
		readTextFile(filePath);
	});

	return (
		<div>
			{text.split("\n").map((item, key) => {
				return <span key={key}>{item}<br /></span>;
			})}
		</div>
	)
};

export default FileReader;