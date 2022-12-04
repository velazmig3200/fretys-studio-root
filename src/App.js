import React, { useRef, useState } from "react";
import AddNote from "./components/AddNote";
import CreateTab from "./components/CreateTab";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
import Copy from "./components/Copy";
import cc from "./components/styles/classChain";

function App() {
	const [strings, setStrings] = useState([
		{ name: "e", tab: "" },
		{ name: "B", tab: "" },
		{ name: "G", tab: "" },
		{ name: "D", tab: "" },
		{ name: "A", tab: "" },
		{ name: "E", tab: "" }
	]);
	const [activeS, setActiveS] = useState(strings[strings.length - 1].name);
	const [noteVal, setNoteVal] = useState("");
	const canvasRef = useRef(null);

	return (
		<div>
			<Header />
			<section>
				<CreateTab setActiveS={setActiveS} setStrings={setStrings} />
				<AddNote
					strings={strings}
					setStrings={setStrings}
					activeS={activeS}
					setActiveS={setActiveS}
					noteVal={noteVal}
					setNoteVal={setNoteVal}
				/>
				<Copy canvasRef={canvasRef} />
			</section>
			<Canvas
				strings={strings}
				activeS={activeS}
				setActiveS={setActiveS}
				noteVal={noteVal}
				canvasRef={canvasRef}
			/>
			<p className={cc("canvas", "stickyLegend")}>↓ LEGEND ↓</p>
			<section className={cc("canvas", "legendContainer")}>
				<p>Type into the input bar</p>
				<p>
					<kbd>Enter</kbd>: Enter value and jump to next string.
				</p>
				<p>
					<kbd>Space</kbd>: Add spacing to currrent line. ("-")
				</p>
				<p>
					<kbd>Shift</kbd> + <kbd>Space</kbd>: Add spacing to all lines. ("-")
				</p>
				<p>
					<kbd>Delete</kbd>: Backspace current line.
				</p>
				<p>
					<kbd>Shift</kbd> + <kbd>Delete</kbd>: Backspace all lines.
				</p>
			</section>
		</div>
	);
}

export default App;
