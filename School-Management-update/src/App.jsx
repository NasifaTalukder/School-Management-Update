import React from "react";
import AboutSection from "./Components/HomePage/AboutSection";
import Achievements from "./Components/HomePage/Achievements";
import CalendarSection from "./Components/HomePage/Calendar";
import ComplaintCorner from "./Components/HomePage/ComplaintCorner";
import UniversityStatistics from "./Components/HomePage/CounterCampus";
import Footer from "./Components/HomePage/FooterTest";
import Header from "./Components/HomePage/header";
import HeroSection from "./Components/HomePage/HeroSection";
import Navbar from "./Components/HomePage/Navbar";
import PrincipalMessage from "./Components/HomePage/PrincipalMessage";
import ResultSearch from "./Components/HomePage/ResultSearch";
import TeacherSection from "./Components/HomePage/TeacherSection";
import NoticeBoard from "./Components/HomePage/TestNews";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="mx-auto w-full ">
        <HeroSection />
        <div className="w-full flex justify-center p-4">
          <div className="max-w-7xl grid md:grid-cols-2 gap-6 justify-items-center w-full mt-12">
            <PrincipalMessage />
            <NoticeBoard />
            {/* <LatestNotice /> */}
          </div>
        </div>
          <div>
          <AboutSection />
          </div>
          <div className="mt-10">
          <UniversityStatistics />
          </div>
        

        <div className=" max-w-7xl m-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <div className="md:col-span-2 ">
            {/* <LeadershipProfile/> */}
            <TeacherSection />
            <Achievements />
          </div>
          <div>
            {/* <LatestNotice /> */}
            <ResultSearch />
            {/* <ComplaintCorner /> */}
            <CalendarSection />
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <NecessaryMenu />
          <VisitorCount />
        </div> */}
      </div>
      <div className="mt-16">
      <Footer />
      </div>
    </>
  );
};

export default App;
