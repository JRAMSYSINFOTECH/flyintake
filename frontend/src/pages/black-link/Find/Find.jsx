import React from 'react'
import './Find.css'
import ContactPage from '../../../components/Contact/Contact'
import FindH from './FindH'
import WhyIntakeCounsellors from './WhyIntakeCounsellors'
import IntakeOfficelist from './IntakeOfficelist'
import StudyAbroadPromo from '../../white-link/Student_Essentials/StudentEssFrom/StudyAdroadPromo'

import IDP from '../../../components/IntakeStudents/Intake'

const Find = () => {
  return (
    <div className="find-page-container">
     
      <WhyIntakeCounsellors />
      <IntakeOfficelist />
      <IDP />
      <StudyAbroadPromo />
      <ContactPage />
    </div>
  )
}

export default Find
