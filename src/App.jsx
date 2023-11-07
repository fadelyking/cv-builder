import "./App.css";
import ParentFunction from "./components/GeneralInformation";
import CV from "./components/CV";
import EducationInfo from "./components/Education";
import ExperienceInfo from "./components/Experience";
import { useState } from "react";
function App() {
	const [personInfo, setPersonInfo] = useState({
		name: "",
		email: "",
		number: "",
	});

	const [personEducation, setPersonEducation] = useState({
		school: "",
		titleOfStudy: "",
		date: "",
	});

	const [personExperience, setPersonExperience] = useState({
		company: "",
		position: "",
		responsibilities: "",
		startDate: "",
		endDate: "",
	});

	const receiveGeneralData = (data) => {
		setPersonInfo({
			userName: data.name,
			userEmail: data.email,
			userNumber: data.number,
		});
	};

	const receiveEducationData = (data) => {
		setPersonEducation({
			userSchool: data.school,
			userTitleOfStudy: data.titleOfStudy,
			userDate: data.date,
		});
	};

	const receiveExperienceData = (data) => {
		setPersonExperience({
			userCompany: data.company,
			userPosition: data.positionTime,
			userResponsibilities: data.responsibilities,
			userStartDate: data.startDate,
			userEndDate: data.endDate,
		});
	};

	return (
		<>
			<ParentFunction
				onSubmit={receiveGeneralData}
				name={personInfo.userName}
				email={personInfo.userEmail}
				number={personInfo.userNumber}
			/>
			<EducationInfo onSubmit={receiveEducationData} />
			<ExperienceInfo onSubmit={receiveExperienceData} />
			<CV
				name={personInfo.userName}
				email={personInfo.userEmail}
				number={personInfo.userNumber}
				school={personEducation.userSchool}
				study={personEducation.userTitleOfStudy}
				date={personEducation.userDate}
				company={personExperience.userCompany}
				position={personExperience.userPosition}
				responsibilities={personExperience.userResponsibilities}
				start={personExperience.userStartDate}
				end={personExperience.userEndDate}
			/>
		</>
	);
}

export default App;
