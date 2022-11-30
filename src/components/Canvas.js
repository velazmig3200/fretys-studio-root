import React from "react";

function Canvas({ strings }) {
	let elements = [];
	const str = obj => Object.keys(obj)[0];

	//loop through the strings
	for (let i in strings) {
		elements.push(
			<p key={i}>
				{strings[i].name}
				|-
				{strings[i].tab}
				-|
			</p>
		);
	}
	return <section>Canvas{elements}</section>;
}

export default Canvas;
