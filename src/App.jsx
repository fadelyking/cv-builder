
import './App.css'
import ParentFunction from "./components/GeneralInformation"
import CV from './components/CV'
import EducationInfo from './components/Education'
import { useState } from 'react'
function App(props) {

  const [personInfo, setPersonInfo] = useState({
  name: "",
  email: "",
  number: "",})

  const [personEducation, setPersonEducation] = useState({
    school: "",
    titleOfStudy: "",
    date: "",
  })

  const receiveGeneralData = (data) => {
    setPersonInfo({
      userName: data.name,
      userEmail: data.email,
      userNumber: data.number})
} 

const receiveEducationData = (data) => {
  setPersonEducation({
    userSchool: data.school,
    userTitleOfStudy: data.titleOfStudy,
    userDate: data.date})
} 


  return (
    <>
     <ParentFunction onSubmit={receiveGeneralData}/>
     <EducationInfo onSubmit={receiveEducationData} />
     <CV 
     name={personInfo.userName} 
     email={personInfo.userEmail} 
     number={personInfo.userNumber} 
     school={personEducation.userSchool}
     study={personEducation.userTitleOfStudy}
     date={personEducation.userDate}/>
  </>)
}

export default App
