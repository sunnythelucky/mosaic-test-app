import _ from "lodash";
import React from "react";

import hatchways from "../hatchways";
import SearchBar from "./SearchBar";
import SearchTagBar from "./SearchTagBar";
import StudentList from "./StudentList";
import "./App.css";

class App extends React.Component {
	state = { students: [] };

	handleCallback = (term) => {
		this.setState({ term: term });
	};

	fetchStudents = async () => {
		const response = await hatchways.get("/assessment/students");
		this.setState({ students: response.data.students });
	};

	filterStudents() {
		if (!this.state.term) {
			return this.state.students;
		} else {
			return _.filter(this.state.students, (student) => {
				const fullName = `${student.firstName} ${student.lastName}`.toUpperCase();
				const searchTerm = this.state.term.toUpperCase();

				return _.includes(fullName, searchTerm);
			});
		}
	}
	handleTag = (term) => {
		this.setState({ tagTerm: term });
	};

	componentDidMount() {
		this.fetchStudents();

		// this.setState({ students: response });
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar handleCallback={this.handleCallback} />
				<SearchTagBar handleTag={this.handleTag} />
				<StudentList students={this.filterStudents()} tagTerm={this.state.tagTerm} />
			</div>
		);
	}
}

export default App;
