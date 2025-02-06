import React, { useState } from "react";
import AboutImage1 from "../../assets/about-1.png";
import AboutImage2 from "../../assets/about-2.jpg";
import AboutImage3 from "../../assets/about-3.jpg";

const AboutSection = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore((prevState) => !prevState);
  };

  return (
    <section className="bg-[#F3F4F6] py-12 px-6 lg:px-16 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-black mb-4">
            About <span className="text-black">US</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Adamjee Cantonment College is a renowned and well established
            educational institution of the country. It has been crowned with the
            full glory of passing over more than half a century in the field of
            education arena of Bangladesh since 1960. This institution has
            earned the rare prestige of being one of the top ranking colleges of
            Dhaka Education Board for its outstanding academic achievements in
            HSC exam in the recent academic years.
          </p>
          {/* {isReadMore && (
            <p className="text-gray-700 leading-relaxed mt-4">
               It was adjudged the best
            educational institution of the country for the academic year 2000.
            In 2018, it has been declared the best college of Dhaka City by
            Education Ministry in National Education Week. In terms of HSC
            result, the college has ranked among top five colleges of Dhaka
            Board for last five years. In 2015, it secured the 1st position in
            Dhaka Board. The result of Honours, Masters and Professional BBA
            Programme of this college is one of the best ones in the exams under
            the National University.
            </p>
          )} */}
          <button
            // onClick={toggleReadMore}
            className="mt-4 bg-secondary-colour text-white px-5 py-2 rounded-btn-radius hover:bg-secondary-colour"
          >
            {isReadMore ? "READ LESS" : "READ MORE"}
          </button>
        </div>

        {/* Right Image Section (Overlapping Images) */}
        <div className="lg:w-1/2 relative flex justify-center ">
          {/* Background Large Image */}
          <img
            src={AboutImage1}
            alt="University"
            className="w-96 h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />

          {/* Middle Overlapping Image */}
          <img
            src={AboutImage2}
            alt="Campus"
            className="absolute w-48 h-48 object-cover rounded-lg shadow-md top-10 left-5 transform rotate-2 transition-transform duration-500 hover:scale-105"
          />

          {/* Front Small Image */}
          <img
            src={AboutImage3}
            alt="Building"
            className="absolute w-64 h-40 object-cover rounded-lg shadow-md bottom-0 right-0 transform -rotate-2 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
