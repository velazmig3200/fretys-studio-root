import React, { useState } from "react";

function AddString({ strings, setStrings }) {
	const [value, setValue] = useState("");
	const [value2, setValue2] = useState("");

	return (
		<section>
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				type="text"
				placeholder="string name"
				style={{ width: "100px" }}
			/>
			<input
				value={value2}
				onChange={e => setValue2(e.target.value)}
				type="text"
				placeholder="string number"
				style={{ width: "110px" }}
			/>
			<button
				onClick={() => {
					let newStrings = strings;
					if (value2 <= newStrings.length) {
						newStrings[value2 - 1].name = value;
					} else {
						newStrings.push({ name: value, tab: "" });
					}
					setStrings([...newStrings]);
				}}>
				add string
			</button>
		</section>
	);
}

export default AddString; //instead of relying on a button to display info, have a bunch of inputs and they correspond to different values on the canvas
