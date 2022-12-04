import React from "react";

function Copy(canvasRef) {
	canvasRef = canvasRef.canvasRef;
	return (
		<button
			onClick={() => navigator.clipboard.writeText(canvasRef.current.innerText)}>
			Copy to Clipboard
		</button>
	);
}

export default Copy;
