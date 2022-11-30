import React from "react";

function AddNote() {
	return (
		<form>
			<label htmlFor="string">string: </label>
			<select name="string">
				<option>option1</option>
				<option>option2</option>
			</select>
		</form>
	);
}

export default AddNote;
