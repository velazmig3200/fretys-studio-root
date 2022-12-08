import React from "react";
import cc from "./styles/classChain";

function InputBar(props) {
	const {
		strings,
		setStrings,
		activeString,
		setActiveString,
		inputBarVal,
		setInputBarVal
	} = props;

	const handleKeyDown = e => {
		let currentTab = strings.find(e => e.name == activeString).tab;
		switch (e.key) {
			//new line
			case "Enter":
				let index = strings.indexOf(strings.find(e => e.name == activeString));
				index - 1 >= 0 ? index-- : (index = strings.length - 1);

				let spacing = "";
				inputBarVal != "" &&
					inputBarVal != "-" &&
					inputBarVal.length < 2 &&
					(spacing += "-");
				strings.find(
					e => e.name == activeString
				).tab = `${currentTab}${inputBarVal}${spacing}`;

				if (e.shiftKey) {
					if (inputBarVal == "") return;
					let index = strings.indexOf(strings.find(e => e.name == activeString));
					if (index < 2) return;
					let newStrings = strings;
					for (let i = 0; i < index; i++) {
						newStrings[i].tab += "--";
					}
					setInputBarVal("");
					setActiveString(strings[strings.length - 1].name);
					setStrings(newStrings);
				} else {
					setInputBarVal("");
					setActiveString(strings[index].name);
				}
				break;
			//delete line
			//delete; canvas backspace
			case "Delete":
				if (e.shiftKey) {
					setInputBarVal("");
					setStrings(
						strings.map(e => {
							e.tab = e.tab.slice(0, -1);
							return e;
						})
					);
				} else {
					setStrings(
						strings.map(e => {
							if (e.name == activeString) {
								e.tab = e.tab.slice(0, -1);
							}
							return e;
						})
					);
				}
				break;
			//add spacing
			case " ":
				if (e.shiftKey) {
					e.preventDefault();
					setStrings(
						strings.map(e => {
							e.tab += "-";
							return e;
						})
					);
				} else {
					e.preventDefault();
					setStrings(
						strings.map(e => {
							if (e.name == activeString) {
								e.tab += "-";
							}
							return e;
						})
					);
				}
			case "|":
				if (!e.shiftKey) return;
				if (e.key == " ") return;
				e.preventDefault();
				setStrings(
					strings.map(e => {
						e.tab += "|";
						return e;
					})
				);
				break;
			default:
			// console.log(e);
		}
	};

	return (
		<input
			type="text"
			onKeyDown={handleKeyDown}
			value={inputBarVal}
			onChange={e => setInputBarVal(e.target.value)}
			placeholder="input bar"
			className={cc("canvas", "inputNotes")}
		/>
	);
}

export default InputBar;
