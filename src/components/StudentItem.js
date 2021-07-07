import React, { useState } from "react";

import "./App.css";
import AddTag from "./AddTag";
import Button from "./Button";

const StudentItem = (props) => {
	const [gradeList, setGradeList] = useState([]);
	const [visibility, setVisibility] = useState(false);
	const [tags, setTags] = useState([]);

	const iconToggle = () => {
		setVisibility(!visibility);
		showGrade(grades);
	};

	const { firstName, company, email, grades, id, lastName, pic, skill } = props.student;

	const average = (array) => {
		let total = 0;
		let avg;
		for (let i = 0; i < array.length; i++) {
			total += +array[i];
		}
		avg = total / array.length;
		return avg;
	};
	const setTag = (value) => {
		setTags([...tags, value]);
	};

	const expanedList = grades.map((grade, index) => {
		return (
			<div key={index} className="grade-list">
				<div>Test {index + 1}:</div>
				<div className=" grade-list-right">{grade}%</div>
			</div>
		);
	});

	const showGrade = () => {
		setGradeList(visibility ? "" : expanedList);
	};

	const displayTags = tags.map((tag) => {
		return (
			<button className="ui button" key={tag}>
				{tag}
			</button>
		);
	});

	return (
		<div className="item each" key={id}>
			<img className="ui avatar small image circular bordered" src={pic} alt="alien profiles" />
			<div className="content">
				<h1 className="header">
					{firstName} {lastName}
				</h1>
				<div className="ui list description">
					<div className="item">Email: {email}</div>
					<div className="item">Company: {company}</div>
					<div className="item">Skill: {skill}</div>
					<div className="item">Average: {average(grades)}%</div>
					<div className="item">{gradeList}</div>
				</div>
				<AddTag setTag={setTag} displayTags={displayTags} />
			</div>
			<Button onClick={iconToggle} />
		</div>
	);
};

export default StudentItem;
