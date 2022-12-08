import React, { useRef, useState } from "react";
import InputBar from "./components/InputBar";
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
	const [activeString, setActiveString] = useState(
		strings[strings.length - 1].name
	);
	const [inputBarVal, setInputBarVal] = useState("");
	const canvasRef = useRef(null);

	return (
		<div>
			<Header />
			<section>
				<CreateTab setActiveString={setActiveString} setStrings={setStrings} />
				<InputBar
					strings={strings}
					setStrings={setStrings}
					activeString={activeString}
					setActiveString={setActiveString}
					inputBarVal={inputBarVal}
					setInputBarVal={setInputBarVal}
				/>
				<Copy canvasRef={canvasRef} />
			</section>
			<Canvas
				strings={strings}
				activeString={activeString}
				setActiveString={setActiveString}
				inputBarVal={inputBarVal}
				canvasRef={canvasRef}
			/>
			<p className={cc("canvas", "stickyLegend")}>↓ LEGEND ↓</p>
			<section className={cc("canvas", "legendContainer")}>
				<p>Type into the input bar above the tab:</p>
				<p>
					<kbd>Enter</kbd>: Enter, Next string
				</p>
				<p>
					<kbd>Shift</kbd> + <kbd>Enter</kbd>: Autofill spaces
				</p>
				<p>
					<kbd>Space</kbd>: Add "-"
				</p>
				<p>
					<kbd>Shift</kbd> + <kbd>Space</kbd>: Add "-" to all strings
				</p>
				<p>
					<kbd>Delete</kbd>: Backspace
				</p>
				<p>
					<kbd>Shift</kbd> + <kbd>Delete</kbd>: Backspace all
				</p>
				<p>
					<kbd>|</kbd> or <kbd>Shift</kbd> + <kbd>\</kbd>: Add measure line
				</p>
			</section>
		</div>
	);
}

export default App;
