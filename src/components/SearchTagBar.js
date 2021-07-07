import React from "react";
import "./App.css";

class SearchTagBar extends React.Component {
	onChange = (event) => {
		const term = event.target.value;
		this.props.handleTag(term)
	};

	render() {
		return (
			<form onSubmit={(event) => event.preventDefault()} className="ui form">
				<div className="field">
					<input placeholder="Search by tag" type="text" onChange={(event) => this.onChange(event)} />
				</div>
			</form>
		);
	}
}
export default SearchTagBar;
