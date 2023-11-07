import { useState } from "react";

export default function EducationInfo(props) {
	const [school, setSchool] = useState("");
	const [titleOfStudy, setTitleOfStudy] = useState("");
	const [date, setDate] = useState(0);

	function handleSchoolChange(e) {
		setSchool(e.target.value);
	}

	function handleStudyChange(e) {
		setTitleOfStudy(e.target.value);
	}

	function handleDateChange(e) {
		setDate(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.onSubmit({ school, titleOfStudy, date });
	}

	return (
		<form onSubmit={handleSubmit}>
			<input label="School Name" type="text" value={school} onChange={handleSchoolChange} />
			<input
				label="Title of Study"
				type="text"
				value={titleOfStudy}
				onChange={handleStudyChange}
			/>
			<input label="Date" type="date" value={date} onChange={handleDateChange} />
			<input type="Submit" />
		</form>
	);
}
