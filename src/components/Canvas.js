import React from "react";
import cc from "./styles/classChain";

function Canvas({ strings, activeString, inputBarVal, canvasRef }) {
	let elements = [];

	//loop through the strings
	for (let i in strings) {
		elements.push(
			<p
				key={i}
				className={cc(
					"canvas",
					`canvas ${activeString == strings[i].name}?active 
                    ${strings[i].name.length < 2}?margin`
				)}>
				{strings[i].name}|-{strings[i].tab}
				<span style={{ color: "var(--highlight2)" }}>
					{activeString == strings[i].name && inputBarVal}
				</span>
				|
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
