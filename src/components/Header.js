import React from "react";
import cc from "./styles/classChain";

function Header() {
	return (
		<h1 className={cc("canvas", "header")}>
			| <span style={{ color: "var(--main)" }}>·</span> |
			<span style={{ color: "var(--dark)" }}>frety's</span>|{" "}
			<span style={{ color: "var(--main)" }}>·</span> |
			<span style={{ color: "var(--highlight)" }}>studio</span>|
		</h1>
	);
}

export default Header;
