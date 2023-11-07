import { useState } from "react";

export default function ExperienceInfo(props) {
	const [company, setCompany] = useState("");
	const [positionTime, setPositionTime] = useState(0);
	const [responsibilities, setResponsibilities] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	function handleCompanyChange(e) {
		setCompany(e.target.value);
	}

	function handlePositionChange(e) {
		setPositionTime(e.target.value);
	}

	function handleResponsibilitiesChange(e) {
		setResponsibilities(e.target.value);
	}

	function handleStartDateChange(e) {
		setStartDate(e.target.value);
	}

	function handleEndDateChange(e) {
		setEndDate(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.onSubmit({ company, positionTime, responsibilities, startDate, endDate });
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				label="Company Name"
				type="text"
				value={company}
				onChange={handleCompanyChange}
			/>
			<input
				label="Position Name"
				type="text"
				value={positionTime}
				onChange={handlePositionChange}
			/>
			<input
				label="Responsibilities"
				type="textarea"
				value={responsibilities}
				onChange={handleResponsibilitiesChange}
			/>
			<input label="Date" type="date" value={startDate} onChange={handleStartDateChange} />
			<input label="Date" type="date" value={endDate} onChange={handleEndDateChange} />
			<input type="Submit" />
		</form>
	);
}
