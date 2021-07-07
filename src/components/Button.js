import React, { useState } from "react";
import "./App.css";

const Button = (props) => {
	const [visibility, setVisibility] = useState(false);
	const [iconClass, setIconClass] = useState("plus icon");

	const iconToggle = () => {
		setVisibility(!visibility);
		setIconClass(visibility ? "plus icon" : "minus icon");
		props.onClick();
	};

	return (
		<button className="ui right floated icon button no-background no-margin" onClick={iconToggle}>
			{/* {visibility ? <i className="minus icon"></i> : <i className="plus icon"></i>} */}
			<i className={iconClass}></i>
		</button>
	);
};

export default Button;
