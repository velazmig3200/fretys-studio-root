import React from "react";
import cc from "./styles/classChain";

function Canvas({ strings, activeS, noteVal, canvasRef }) {
	let elements = [];

	//loop through the strings
	for (let i in strings) {
		elements.push(
			<p
				key={i}
				className={cc(
					"canvas",
					`canvas ${activeS == strings[i].name}?active 
                    ${strings[i].name.length < 2}?margin`
				)}>
				{strings[i].name}|-{strings[i].tab}
				{activeS == strings[i].name && noteVal}|
			</p>
		);
	}

	return (
		<section ref={canvasRef} className={cc("canvas", "canvasContainer")}>
			{elements}
		</section>
	);
}

export default Canvas;
