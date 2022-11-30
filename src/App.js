import React, { useState } from "react";
import AddNote from "./components/AddNote";
import AddString from "./components/AddString";
import Canvas from "./components/Canvas";
import Header from "./components/Header";

function App() {
	// const [steps, setSteps] = useState([]);
	//debug
	const [strings, setStrings] = useState([{ name: "G", tab: "1--1--1-----1" }]);

	return (
		<div>
			<Header />
			<AddString strings={strings} setStrings={setStrings} />
			<AddNote />
			<br />
			<Canvas strings={strings} />
		</div>
	);
}

export default App;
