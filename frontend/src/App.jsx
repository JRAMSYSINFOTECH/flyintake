import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// Common Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Services from "./components/services/Services";
import Destinations from "./components/Destination/Destinations";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import Import from "./components/Implinks/Import";
import Fastlane from "./components/Fastlane/Fastlane";
import INTAKE from "./components/IntakeStudents/Intake";
import Essentials from "./components/Essentials/Essentials";
import AboutIntake from "./components/AboutIntakeP/AboutIntake";
import StudySteps from "./components/StudySteps/StudySteps";
import BlueNav from "./components/BlueNav/BlueNav";

// Black-Link Pages
import English from "./pages/black-link/English";
import Events from "./pages/black-link/Events";
import EventRegistration from "./pages/black-link/EventRegistration.jsx";
import EnglishPrograms from "./pages/black-link/EnglishProgramPage.jsx";
import Find from "./pages/black-link/Find/Find";

import NewAndA from "./pages/black-link/NewAndA";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

// White-Link Pages
import EnglishT from "./pages/white-link/EnglishTests/EnglishT.jsx";
import Toefl from "./pages/white-link/EnglishTests/Toefl/Toefl.jsx";
import Duolingo from "./pages/white-link/EnglishTests/Duolingo/Duolingo.jsx";
import Avail from "./pages/white-link/Avail_Free/Avail";
import IELTSPage from "./pages/white-link/IELTS/IELTS1.jsx";
import SignIN from "./pages/white-link/Sign_In/SignIN";
// import Sign_Up from "./pages/white-link/Sign_Up/Sign_Up";

// Study Abroad
import WhyStudyAbroadPage from "./pages/white-link/Study_Abroad/WhyStudyAbroadPage";
import AfterOfferPage from "./pages/white-link/Study_Abroad/AfterOfferPage";
import HowToApplyPage from "./pages/white-link/Study_Abroad/HowToApplyPage";
import WhereToStudyPage from "./pages/white-link/Study_Abroad/WhereToStudyPage";
import PrepareToDepartPage from "./pages/white-link/Study_Abroad/PrepareToDepartPage";
import ArriveAndThrivePage from "./pages/white-link/Study_Abroad/ArriveAndThrivePage";
import StudyAbNavbar from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StudyAbNavbar";

// Student Essentials
import Student from "./pages/white-link/Student_Essentials/Student";
import HowItWorks from "./pages/white-link/Student_Essentials/HowItWorks";
import StudentEssFrom from "./pages/white-link/Student_Essentials/StudentEssFrom/StudentEssFrom";
import Accommodation from "./pages/white-link/Student_Essentials/StudentEs-Types/Accommodation";
import EducationLoan from "./pages/white-link/Student_Essentials/StudentEs-Types/Education_loan";
import HealthInsurance from "./pages/white-link/Student_Essentials/StudentEs-Types/Health_Insurance";
import StudentBanking from "./pages/white-link/Student_Essentials/StudentEs-Types/Student_banking";
import ForexCards from "./pages/white-link/Student_Essentials/StudentEs-Types/Forex_Cards";
import Guardian_Ship from "./pages/white-link/Student_Essentials/StudentEs-Types/Guardian_Ship";
import ISIC from "./pages/white-link/Student_Essentials/StudentEs-Types/ISIC";
import InternationalSimCards from "./pages/white-link/Student_Essentials/StudentEs-Types/International_SIM_Cards";
import EducationLoanDetails from "./pages/white-link/Student_Essentials/StudentEs-Types/EducationLoanDetails";
import * as EducationLoanApplyModule from "./pages/white-link/Student_Essentials/StudentEs-Types/EducationLoanApply";
import AccommodationDetails from "./pages/white-link/Student_Essentials/StudentEs-Types/AccommodationDetails";
import AccommodationApply from "./pages/white-link/Student_Essentials/StudentEs-Types/AccommodationApply";
import HealthInsuranceDetails from "./pages/white-link/Student_Essentials/StudentEs-Types/HealthInsuranceDetails";
import StudentBankingDetails from "./pages/white-link/Student_Essentials/StudentEs-Types/StudentBankingDetails";
import MoneyTransferDetails from "./pages/white-link/Student_Essentials/StudentEs-Types/MoneyTransferDetails";
import ForexCardsDetails from "./pages/white-link/Student_Essentials/StudentEs-Types/ForexCardsDetails";
import GuardianShipDetails from "./pages/white-link/Student_Essentials/StudentEs-Types/GuardianShipDetails";
import InternationalSimDetails from "./pages/white-link/Student_Essentials/StudentEs-Types/InternationalSimDetails";
import ISICDetails from "./pages/white-link/Student_Essentials/StudentEs-Types/ISICDetails";
import HealthInsuranceApply from "./pages/white-link/Student_Essentials/StudentEs-Types/HealthInsuranceApply";
import StudentBankingApply from "./pages/white-link/Student_Essentials/StudentEs-Types/StudentBankingApply";
import MoneyTransferApply from "./pages/white-link/Student_Essentials/StudentEs-Types/MoneyTransferApply";
import ServicesSection from "./pages/white-link/Student_Essentials/StudentEssFrom/ServiceSection";
import MoneyTransfer from "./pages/white-link/Student_Essentials/StudentEs-Types/Money_transfer";
import StudyAbroadPromo from "./pages/white-link/Student_Essentials/StudentEssFrom/StudyAdroadPromo";
import ShortList from "./components/ShortList/ShortList";
import Related_Articles from "./pages/Related_Articles/Related_Articles";
import ArticleDetail from "./pages/Related_Articles/ArticleDetail";
import FindH from "./pages/black-link/Find/FindH";
import FindCountryPage from "./pages/black-link/Find/FindCountryPage";
import InfoSection from "./pages/black-link/Find/InfoSection";
import Trainings from "./pages/Trainings/Trainings";

//Find a course and IELTS 

import CourseA from "./pages/white-link/Find_A_Course/CourseAdvice/CourseAdvice";
import FindC from "./pages/white-link/Find_A_Course/CourseAdvice/Findcourses/FindC";
import Courseof from "./pages/white-link/Find_A_Course/Courseinstant/Courseof";
import Sabroad from "./pages/white-link/Find_A_Course/Study_Abroad/Sabroad";
import FindScholar from "./pages/white-link/Find_A_Course/FindScholar/findsc/findscholar.jsx";
import Scholar from "./pages/white-link/Find_A_Course/FindScholar/Scholar"
import FindU from "./pages/white-link/Find_A_Course/Find_Universities/FindU";
import Oneac from "./components/OnSignInBanner/Oneac";
import Uranking from "./pages/white-link/Find_A_Course/University_Ranking/Uranking";
import Qsworld from "./pages/white-link/Find_A_Course/University_Ranking/Qs_World/Qsworld";
import Cug from "./pages/white-link/Find_A_Course/C_U_G/Cug";

import What from "./pages/white-link/IELTS/What_is_IELTS/What";
import Prep from "./pages/white-link/IELTS/IELTS_prep/Prep";
// Study Destinations
import AskIntakeStudyAbroad from "./pages/white-link/Study_Abroad/AskIntake/AskIntake";
import ExploreAbroadPrgms from "./pages/white-link/StudyDestinations/ExploreAbroadPrgms";
import Studydestcnt from "./pages/white-link/StudyDestinations/Studydestcnt";


import StdyAushero from "./pages/white-link/StudyDestinations/StudyInAustralia/StdyAushero";
import StdyAustcnt from "./pages/white-link/StudyDestinations/StudyInAustralia/StdyAustcnt.jsx";
import Stdycanhero from "./pages/white-link/StudyDestinations/StudyInCanada/Stdycanhero.jsx";
import Stdycancnt from "./pages/white-link/StudyDestinations/StudyInCanada/Stdycancnt.jsx";
import StdyUkhero from "./pages/white-link/StudyDestinations/StudyInUk/StdyUkhero.jsx";
import StdyIrlndhero from "./pages/white-link/StudyDestinations/StudyInIreland/StudyIn/StdyIrlndhero.jsx";
import StdyUsahero from "./pages/white-link/StudyDestinations/StudyInUsa/StdyUsahero.jsx";
import StdyIrlndcnt from "./pages/white-link/StudyDestinations/StudyInIreland/StudyIn/StdyIrlndcnt.jsx";
import Stdyinukcnt from "./pages/white-link/StudyDestinations/StudyInUk/Stdyinukcnt.jsx";
import StudyDestinationsHero from "./pages/white-link/StudyDestinations/StudyDestinationsHero";

//about and contact us pages
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";

// Footer Pages
import IntakeCareers from "./pages/white-link/FooterPages/IntakeCareers";
import AskIntake from "./pages/white-link/FooterPages/AskIntake";
import CostOfLiving from "./pages/white-link/FooterPages/CostOfLiving";
import StatementOfPurpose from "./pages/white-link/FooterPages/StatementOfPurpose";
import LetterOfRecommendation from "./pages/white-link/FooterPages/LetterOfRecommendation";
import CorporateResponsibility from "./pages/white-link/FooterPages/CorporateResponsibility";
import CustomerGrievances from "./pages/white-link/FooterPages/CustomerGrievances";
import Investors from "./pages/white-link/FooterPages/Investors";
import TermsOfUse from "./pages/white-link/FooterPages/TermsOfUse";
import PrivacyPolicy from "./pages/white-link/FooterPages/PrivacyPolicy";
import Disclaimer from "./pages/white-link/FooterPages/Disclaimer";
import PaymentPage from "./components/PaymentGateway/PaymentGateway.jsx";
import SignUp from "./pages/white-link/Sign_Up/Sign_Up";
import VisaAssistance from "./pages/black-link/Find/GET_EXPERT/VisaAssistance.jsx";
import OngoingSupport from "./pages/black-link/Find/GET_EXPERT/OngoingSupport.jsx";
import ApplicationProcess from "./components/services/servicesTypes/ApplicationProcess.jsx";
import ProfileAssessment from "./components/services/servicesTypes/ProfileAssessment.jsx";
import PreDeparture from "./components/services/servicesTypes/PreDeparture.jsx";
import AdmissionAcceptance from "./components/services/servicesTypes/AdmissionAcceptance.jsx";
import Profile from "./components/Profile/Profile.jsx";
import StudyGermany from "./pages/white-link/StudyDestinations/StudyInGermany/StudyGermany.jsx";
import StudyEurope from "./pages/white-link/StudyDestinations/StudyInEurope/StudyEurope.jsx";



// ✅ Layout for white-link pages
const WhiteLinkLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero/>
              <Testimonials />
              
              <Services />
              <Destinations />
              <StudySteps />
              <Import />
              <Contact />
              {/* <Fastlane /> */}
              {/* <INTAKE /> */}
              {/* <Essentials /> */}
              {/* <AboutIntake /> */}
              <Footer />
            </>
          }
        />

        {/* ⚙️ Services Page */}
        <Route
          path="/services"
          element={
            <WhiteLinkLayout>
              <Services />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/Apply"
          element={
            <WhiteLinkLayout>
              <ApplicationProcess />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/PreD"
          element={
            <WhiteLinkLayout>
              <PreDeparture />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/Pro"
          element={
            <WhiteLinkLayout>
              <ProfileAssessment />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/Adm"
          element={
            <WhiteLinkLayout>
              <AdmissionAcceptance />
            </WhiteLinkLayout>
          }
        />






        {/* 📚 Study Details - Generic and Specific */}
        <Route
          path="/study/:slug"
          element={
            <WhiteLinkLayout>
              <ComingSoon />
            </WhiteLinkLayout>
          }
        />

        {/* ⚫ Black-Link Pages */}
        <Route
          path="/pages/Events"
          element={
            <>
              <Navbar />
              <BlueNav />
              <Events />
              <Footer />
            </>
          }
        />

        <Route
          path="/pages/Events/Register"
          element={
            <>
              <Navbar />
              <BlueNav />
              <EventRegistration />
              <Footer />
            </>
          }
        />

        <Route
          path="/pages/NewAndA"
          element={
            <>
              <Navbar />
              <BlueNav />
              <NewAndA />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/English"
          element={
            <>
              <Navbar />
              <BlueNav />
              <English />
              <Footer />
            </>
          }
        />
        <Route
          path="/english/programs"
          element={
            <>
              <Navbar />
              <BlueNav />
              <EnglishPrograms />
              <Footer />
            </>
          }
        />

        <Route
          path="/pages/black-link/Find/Find"
          element={
            <>
              <Navbar />
              <BlueNav />
              <FindH />
              <InfoSection />
              <Find />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <WhiteLinkLayout>
              <Contact />
            </WhiteLinkLayout>
          }
        />

        {/* ⚪ White-Link Pages */}
        <Route
          path="/study-abroad/why-study-abroad"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <WhyStudyAbroadPage />
              <NewAndA />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-abroad/how-to-apply"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <HowToApplyPage />
              <NewAndA />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-abroad/where-to-study"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <WhereToStudyPage />
              <NewAndA />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-abroad/after-offer"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <AfterOfferPage />
              {/* <NewAndA /> */}
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-abroad/prepare-to-depart"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <PrepareToDepartPage />
              
              {/* <NewAndA /> */}
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-abroad/arrive-and-thrive"
          element={
            <WhiteLinkLayout>
              <StudyAbNavbar />
              <ArriveAndThrivePage />
              {/* <NewAndA /> */}
              <Contact />
            </WhiteLinkLayout>
          }
        />

        <Route
          path="/study-destinations"
          element={
            <WhiteLinkLayout>
              <StudyDestinationsHero
                title="Find Your Perfect Study Abroad Destination"
                subtitle="Explore top universities and programs across the globe."
                backgroundImage="/assets/abroad.jpg"
              />
              <ExploreAbroadPrgms />
              <Studydestcnt />
              <AskIntakeStudyAbroad />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/australia"
          element={
            <WhiteLinkLayout>
              <StdyAushero />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/canada"
          element={
            <WhiteLinkLayout>
              <Stdycanhero />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/ireland"
          element={
            <WhiteLinkLayout>
              <StdyIrlndhero />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/uk"
          element={
            <WhiteLinkLayout>
              <StdyUkhero />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/usa"
          element={
            <WhiteLinkLayout>
              <StdyUsahero />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/germany"
          element={
            <WhiteLinkLayout>
              <StudyGermany />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/study-destinations/europe"
          element={
            <WhiteLinkLayout>
              <StudyEurope />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/components/Profile"
          element={
            <>
              <Navbar />
              <Profile />
              <Footer />
            </>
          }
        />
        {/* Find A course */}
        <Route
          path="/pages/CourseA"
          element={
            <>
              <Navbar />
              <CourseA />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/Scholar"
          element={
            <>
              <Navbar />
              <Scholar />
              <INTAKE />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/Sabroad"
          element={
            <>
              <Navbar />
              <Sabroad />
              <Contact />
              <Footer />
            </>
          }
        />


        <Route
          path="/pages/FindScholar"
          element={
            <>
              <Navbar />
              <FindScholar />
              <Oneac />
              <Contact />
              <Footer />
            </>
          } />


        <Route

          path="/pages/EnglishT"
          element={
            <>
              <Navbar />
              <EnglishT />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/FindU"
          element={
            <>
              <Navbar />
              <FindU />
              <Oneac />
              <Fastlane />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/Courseof"
          element={
            <>
              <Navbar />
              <Courseof />
              <Fastlane />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/FindC"
          element={
            <>
              <Navbar />
              <FindC />
              <Oneac />
              <Fastlane />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/Uranking"
          element={
            <>
              <Navbar />
              <Uranking />
              <Oneac />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/pages/Trainings"
          element={
            <WhiteLinkLayout>
              <Trainings />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/pages/IELTSPage"
          element={
            <>
              <Navbar />
              <IELTSPage />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/pages/Toefl"
          element={
            <>
              <Navbar />
              <Toefl />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/Duolingo"
          element={
            <>
              <Navbar />
              <Duolingo />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/pages/Qsworld"
          element={
            <>
              <Navbar />
              <Qsworld />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/Cug"
          element={
            <>
              <Navbar />
              <Cug />
              <Oneac />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* IELTS Page */}
        <Route
          path="/pages/What"
          element={
            <>
              <Navbar />
              <What />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/pages/Prep"
          element={
            <>
              <Navbar />
              <Prep />
              <Contact />
              <Footer />
            </>
          }
        />


        {/* About Us and Contact Us Pages */}
        <Route
          path="/about-us"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <Navbar />
              <ContactUs />
              {/* <Contact /> */}
              <Footer />
            </>
          }
        />

        {/* 🎓 Student Essentials */}
        <Route
          path="/student-essentials"
          element={
            <WhiteLinkLayout>
              <Student />
            </WhiteLinkLayout>
          }
        />
        {/* Student Essentials detail pages for individual buttons */}
        <Route
          path="/student-essentials/EducationLoan/details"
          element={
            <WhiteLinkLayout>
              <EducationLoanDetails />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/EducationLoan/apply"
          element={
            <WhiteLinkLayout>
              <EducationLoanApplyModule.default />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/Accommodation/details"
          element={
            <WhiteLinkLayout>
              <AccommodationDetails />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/Accommodation/apply"
          element={
            <WhiteLinkLayout>
              <AccommodationApply />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/HealthInsurance/details"
          element={
            <WhiteLinkLayout>
              <HealthInsuranceDetails />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/HealthInsurance/apply"
          element={
            <WhiteLinkLayout>
              <HealthInsuranceApply />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/StudentBanking/details"
          element={
            <WhiteLinkLayout>
              <StudentBankingDetails />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/StudentBanking/apply"
          element={
            <WhiteLinkLayout>
              <StudentBankingApply />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/Money_Transfer/details"
          element={
            <WhiteLinkLayout>
              <MoneyTransferDetails />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/Money_Transfer/apply"
          element={
            <WhiteLinkLayout>
              <MoneyTransferApply />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/ForexCards/details"
          element={
            <WhiteLinkLayout>
              <ForexCardsDetails />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/Guardian-Ship/details"
          element={
            <WhiteLinkLayout>
              <GuardianShipDetails />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/InternationalSimCards/details"
          element={
            <WhiteLinkLayout>
              <InternationalSimDetails />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/ISIC/details"
          element={
            <WhiteLinkLayout>
              <ISICDetails />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/student-essentials/how-it-works"
          element={
            <WhiteLinkLayout>
              <HowItWorks />
            </WhiteLinkLayout>
          }
        />

        {[
          ["EducationLoan", EducationLoan],
          ["HealthInsurance", HealthInsurance],
          ["Money_Transfer", MoneyTransfer],
          ["StudentBanking", StudentBanking],
          ["Accommodation", Accommodation],
          ["InternationalSimCards", InternationalSimCards],
          ["Guardian-Ship", Guardian_Ship],
          ["ForexCards", ForexCards],
          ["ISIC", ISIC],
          ["Travel_Support", ComingSoon],
        ].map(([pathName, Component]) => (
          <Route
            key={pathName}
            path={`/student-essentials/${pathName}`}
            element={
              <WhiteLinkLayout>
                <Component />
                {pathName === "Money_Transfer" && <StudyAbroadPromo />}
                <StudentEssFrom />
                {/* <EssentialsCards style={{ margin: "2rem 0" }} /> */}
                <ServicesSection />
              </WhiteLinkLayout>
            }
          />
        ))}

        <Route
          path="/pages/white-link/Avail"
          element={
            <WhiteLinkLayout>
              <Avail />
            </WhiteLinkLayout>
          }
        />

        <Route
          path="/pages/Related_Articles"
          element={
            <WhiteLinkLayout>
              <Related_Articles />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/articles/:id"
          element={
            <WhiteLinkLayout>
              <ArticleDetail />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/paymentgateway"
          element={
            <WhiteLinkLayout>
              <PaymentPage />
            </WhiteLinkLayout>
          }
        />


        <Route
          path="/login"
          element={
            <WhiteLinkLayout>
              <SignIN />
            </WhiteLinkLayout>
          }
        />

        <Route
          path="/signup"
          element={
            <WhiteLinkLayout>
              <SignUp />
            </WhiteLinkLayout>
          }
        />

        <Route
          path="/ShortList"
          element={
            <WhiteLinkLayout>
              <ShortList />
            </WhiteLinkLayout>
          }
        />

        {/* 🚧 Coming Soon Page */}
        <Route
          path="/coming-soon"
          element={
            <WhiteLinkLayout>
              <ComingSoon />
            </WhiteLinkLayout>
          }
        />

        {/* 📄 Footer Pages */}
        <Route
          path="/intake-careers"
          element={
            <WhiteLinkLayout>
              <IntakeCareers />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/ask-intake"
          element={
            <WhiteLinkLayout>
              <AskIntake />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/cost-of-living"
          element={
            <WhiteLinkLayout>
              <CostOfLiving />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/statement-of-purpose"
          element={
            <WhiteLinkLayout>
              <StatementOfPurpose />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/letter-of-recommendation"
          element={
            <WhiteLinkLayout>
              <LetterOfRecommendation />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/corporate-responsibility"
          element={
            <WhiteLinkLayout>
              <CorporateResponsibility />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/customer-grievances"
          element={
            <WhiteLinkLayout>
              <CustomerGrievances />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/investors"
          element={
            <WhiteLinkLayout>
              <Investors />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <WhiteLinkLayout>
              <TermsOfUse />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <WhiteLinkLayout>
              <PrivacyPolicy />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <WhiteLinkLayout>
              <Disclaimer />
            </WhiteLinkLayout>
          }
        />

        {/* 🌏 Find Us by Country Page (Dynamic) */}
        <Route
          path="/find-us/:country"
          element={
            <WhiteLinkLayout>
              <FindCountryPage />
            </WhiteLinkLayout>}
        />

        <Route
          path="/Visa"
          element={
            <WhiteLinkLayout>
              <VisaAssistance />
            </WhiteLinkLayout>}
        />

        <Route
          path="/Ongoing"
          element={
            <WhiteLinkLayout>
              <OngoingSupport />
            </WhiteLinkLayout>}
        />






        {/* 🔗 Footer Links Routes */}
        <Route
          path="/find-a-course"
          element={
            <WhiteLinkLayout>
              <FindC />
              <Oneac />
              <Fastlane />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/find-scholarships"
          element={
            <WhiteLinkLayout>
              <Scholar />
              <INTAKE />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/find-universities"
          element={
            <WhiteLinkLayout>
              <FindU />
              <Oneac />
              <Fastlane />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/IELTS/What_is_IELTS/What"
          element={
            <WhiteLinkLayout>
              <What />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/ielts/what-is-ielts"
          element={
            <WhiteLinkLayout>
              <IELTSPage />
              <Contact />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/ielts/IELTS_prep/Prep"
          element={
            <WhiteLinkLayout>
              <Prep />
              <Contact />
            </WhiteLinkLayout>
          }
        />


        {/* ❌ 404 Page */}
        <Route
          path="*"
          element={
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <h2>Page Not Found</h2>
              <Link to="/" style={{ color: "#1d4ed8", textDecoration: "none" }}>
                Go back home
              </Link>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}
