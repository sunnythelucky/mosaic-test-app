import React from "react";
import "./App.css";

class SearchBar extends React.Component {
	onChange = (event) => {
		const term = event.target.value;
		this.props.handleCallback(term);
	};

	render() {
		return (
			<form onSubmit={(event) => event.preventDefault()} className="ui form">
				<div className="field">
					<input placeholder="Search by name" type="text" onChange={(event) => this.onChange(event)} />
				</div>
			</form>
		);
	}
}
export default SearchBar;
