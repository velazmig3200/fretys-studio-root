import React from "react";
import cc from "./styles/classChain";

function AddNote({
	strings,
	setStrings,
	activeS,
	setActiveS,
	noteVal,
	setNoteVal
}) {
	const handleKeyDown = e => {
		let currentTab = strings.find(e => e.name == activeS).tab;
		switch (e.key) {
			//new line
			case "Enter":
				let index = strings.indexOf(strings.find(e => e.name == activeS));
				index - 1 >= 0 ? index-- : (index = strings.length - 1);

				let spacing = "";
				noteVal != "" && noteVal != "-" && noteVal.length < 2 && (spacing += "-");

				strings.find(
					e => e.name == activeS
				).tab = `${currentTab}${noteVal}${spacing}`;
				setNoteVal("");
				setActiveS(strings[index].name);
				break;
			//delete line
			//delete; canvas backspace
			case "Delete":
				if (e.shiftKey) {
					setNoteVal("");
					setStrings(
						strings.map(e => {
							e.tab = e.tab.slice(0, -1);
							return e;
						})
					);
				} else {
					setStrings(
						strings.map(e => {
							if (e.name == activeS) {
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
							if (e.name == activeS) {
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
			default:
			// console.log(e);
		}
	};

	return (
		<input
			type="text"
			onKeyDown={handleKeyDown}
			value={noteVal}
			onChange={e => setNoteVal(e.target.value)}
			placeholder="input bar"
			className={cc("canvas", "inputNotes")}
		/>
	);
}

export default AddNote;
