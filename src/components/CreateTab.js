import React, { useState } from "react";
import cc from "./styles/classChain";

function CreateTab({ setActiveString, setStrings }) {
	const [value, setValue] = useState("");

	return (
		<div>
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				type="text"
				placeholder="string names"
				className={cc("canvas", "inputStrings")}
			/>
			<button
				onClick={() => {
					if (value.length < 1) return;
					let newStrings = [];
					for (let i in value) {
						if (value[i] == "#" || value[i] == "b") {
							newStrings[0] = { name: `${value[i - 1]}${value[i]}`, tab: "" };
						} else {
							newStrings.splice(0, 0, { name: `${value[i]}`, tab: "" });
						}
					}
					setStrings(newStrings);
					setActiveString(newStrings[newStrings.length - 1].name);
				}}>
				Create New Tab (lose previous data?)
			</button>
		</div>
	);
}

export default CreateTab;
