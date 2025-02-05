import React from "react";
import Slider from "react-slick";
import AchievementImage from "../../assets/AchievementImage.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Best Academic Performance",
      description: "Our school has achieved the highest academic performance in the region.",
      imageUrl: AchievementImage,
    },
    {
      title: "Sports Excellence",
      description: "Our students have excelled in regional and national sports events.",
      imageUrl: AchievementImage,
    },
    {
      title: "Community Service",
      description: "Our students have actively participated in numerous community service projects.",
      imageUrl: AchievementImage,
    },
    {
      title: "Innovative Education Programs",
      description: "We have introduced several innovative educational programs to enhance learning.",
      imageUrl: AchievementImage,
    },
  ];

  const settings = {
    dots: false, // Enables navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 2, // Show 2 cards at once
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Slide transition speed
  };

  return (
    <div className=" p-4 rounded-lg mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Achievements</h2>
      <Slider {...settings}>
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-slide">
            <div className="relative bg-white p-4 rounded-lg overflow-hidden" style={{ width: "460px", marginRight: "10px" }}>
              <div className="overflow-hidden">
                <img
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 bg-white shadow-md">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-4">
        <button className="bg-main-color text-white px-12 py-2 rounded-btn-radius">View More</button>
      </div>
    </div>
  );
};

export default AchievementsSection;
