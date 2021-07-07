import React from "react";

import StudentItem from "./StudentItem";
import "./App.css";

const StudentList = (props) => {
	const students = props.students.map((student, tagTerm) => {
		return <StudentItem key={student.id} student={student} tagTerm={tagTerm} />;
	});

	return <div className="ui relaxed divided list no-margin">{students}</div>;
};

export default StudentList;
