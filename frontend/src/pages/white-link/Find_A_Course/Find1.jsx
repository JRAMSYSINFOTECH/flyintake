import React from "react";
import Cug from "./C_U_G/Cug";
import CourseAdvice from "./CourseAdvice/CourseAdvice";
import FindC from "./CourseAdvice/Findcourses/FindC";
import Courseof from "./Courseinstant/Courseof";
import FindU from "./Find_Universities/FindU";
import Scholar from "./FindScholar/Scholar";
import Sabroad from "./Study_Abroad/Sabroad";

const Find1 = () => {
  return (
    <div>
      <Cug />
      <Courseof />
      <div id="course-advice">
        <CourseAdvice />
      </div>
      {/* This component seems to be the main course search, so it can be here */}
      <FindC />
      <div id="find-universities">
        <FindU />
      </div>
      <div id="find-scholarships">
        <Scholar />
      </div>
      <div id="study-abroad-guides">
        <Sabroad />
      </div>
    </div>
  );
};

export default Find1;
