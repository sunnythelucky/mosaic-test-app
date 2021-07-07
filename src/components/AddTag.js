import React, { useRef } from "react";

const AddTag = (props) => {
	const ref = useRef();

	const addingTags = (event) => {
		const value = event.target.value;
		if (event.key === "Enter" && value) {
			// setTags([...tags, value]);
			props.setTag(value);
			ref.current.value = null;
		}
	};

	return (
		<div>
			<div className="ui horizontal list">{props.displayTags}</div>
			<div>
				<input
					className="no-border tag underlined"
					type="text"
					placeholder="Add a tag"
					ref={ref}
					onKeyDown={addingTags}
				/>
			</div>
		</div>
	);
};

export default AddTag;
