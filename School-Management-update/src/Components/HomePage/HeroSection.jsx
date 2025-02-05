import React, { useState } from "react";
import Slider from "react-slick";
import Typewriter from "typewriter-effect";
import LatestNews from "./LatestNews";

// Import the image you provided
import ImageTwo from "../../assets/duet-1.jpg"; // Make sure this path is correct
import Imagethree from "../../assets/duet-2.jpg"; // Make sure this path is correct
import ImageOne from "../../assets/duet-campus.jpg"; // Make sure this path is correct

const slides = [
  {
    image: ImageOne,
    text: "Adamjee Cantonment College",
  },
  {
    image: ImageTwo, // Use different images if available
    text: "আদমজী ক্যান্টনমেন্ট কলেজ।",
  },
  {
    image: Imagethree,
    text: "Adamjee Cantonment College",
  },
];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(slides[0].text);

  const settings = {
    dots: false, // No bottom dots
    infinite: true,
    speed: 1000, // Smooth transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // 4 seconds per slide
    fade: true, // Fade effect for smooth transitions
    arrows: false, // Hide side arrows
    beforeChange: (oldIndex, newIndex) => {
      setCurrentText(slides[newIndex].text);
    },
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <Slider {...settings} className="w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover" // Ensure image covers the wrapper
            />
            {/* Overlay Container for Text (Fixed Width) */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center px-4">
              <div className="w-full max-w-7xl mx-auto mt-[-220px] text-left text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-14">
                  {" "}
                  Welcome To{" "}
                </h1>

                <h1 className="text-4xl md:text-5xl font-bold">
                  <Typewriter
                    options={{
                      strings: [currentText],
                      autoStart: true,
                      loop: true,
                      // delay: 10,
                    }}
                  />
                </h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Fixed Latest News Section at Bottom */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-7xl">
        <LatestNews />
      </div>
    </div>
  );
};

export default HeroSection;
