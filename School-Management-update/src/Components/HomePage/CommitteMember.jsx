import React from "react";
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MemberPic from "../../assets/member.png";

const members = [
  {
    name: "Abdul Latif Khan",
    role: "School President",
    joinDate: "January 1, 2022",
    renewalDate: "January 1, 2027",
    image: { MemberPic },
  },
  {
    name: "Hasmat Ullah",
    role: "School Vice President",
    joinDate: "January 1, 2022",
    renewalDate: "January 1, 2027",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Rezaul Islam",
    role: "School Treasurer",
    joinDate: "January 1, 2022",
    renewalDate: "January 1, 2027",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mahbub Alam",
    role: "School Secretary",
    joinDate: "January 1, 2022",
    renewalDate: "January 1, 2027",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Rezaul Islam",
    role: "School Treasurer",
    joinDate: "January 1, 2022",
    renewalDate: "January 1, 2027",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mahbub Alam",
    role: "School Secretary",
    joinDate: "January 1, 2022",
    renewalDate: "January 1, 2027",
    image: "https://via.placeholder.com/150",
  },
];

const CommitteeSlider = () => {
  return (
    <div className="max-w-7xl  mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold  mb-6">School Committee Members</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="pb-8"
      >
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img
                src={MemberPic}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2">
                Member Joined:{" "}
                <span className="font-semibold">{member.joinDate}</span>
              </p>
              <p className="text-sm text-gray-600">
                Member Tenure:{" "}
                <span className="font-semibold">{member.renewalDate}</span>
              </p>
              <div className="flex justify-center gap-3 mt-4 text-green-600">
                <div className="p-2 bg-secondary-colour text-white rounded-btn-radius">
                  <FaPhone className="text-sm cursor-pointer hover:text-green-800" />
                </div>
                <div className="p-2 bg-secondary-colour text-white rounded-btn-radius">
                  <FaEnvelope className="text-sm cursor-pointer hover:text-green-800" />
                </div>
                <div className="p-2 bg-secondary-colour text-white rounded-btn-radius">
                  <FaFacebook className="text-sm cursor-pointer hover:text-blue-700" />
                </div>
                <div className="p-2 bg-secondary-colour text-white rounded-btn-radius">
                  <FaLinkedin className="text-sm cursor-pointer hover:text-blue-600" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommitteeSlider;
