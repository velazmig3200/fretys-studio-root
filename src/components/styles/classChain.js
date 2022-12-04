/*
    the lines with comments make it possible to use this function 
    to process css module classes without having to import 
    css modules into each component. 
    if you want to use this funcion with imports comment out the 
    lines with comments, and change path1 to moduleName;

    syntax:
    <div className={cc("[name]", `[class] [class] ${true or false value}?[class]`)} ></div>
*/
import React from "react";
import canvas from "./canvas.module.css";
const styles = { canvas: canvas };

function cc(moduleName, appliedClasses) {
	let path1 = styles[moduleName]; //w/o importing in components
	let classes = appliedClasses.split(" ");
	let result = [];
	//main loop
	for (let i = 0; i < classes.length; i++) {
		//check for "?"
		if (classes[i].includes("?")) {
			//if true add class
			if (classes[i].split("?")[0] == "true") {
				let split = classes[i].split("?")[1];
				result[i] = `${path1[split]}`; //path1 => moduleName //w/o importing in components
			}
		}
		//else just add class
		else {
			result[i] = `${path1[classes[i]]}`; //path1 => moduleName //w/o importing in components
		}
	}
	return result.join(" ");
}

export default cc;
