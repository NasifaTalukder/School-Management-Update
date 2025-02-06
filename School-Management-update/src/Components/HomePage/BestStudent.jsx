import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import StuImg from "../../assets/img-1.png";
const students = [
  {
    name: "Rahman Hossain",
    class: "Class Five",
    roll: "2",
    year: "2023",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Nahidul Islam",
    class: "Class Ten",
    roll: "1",
    year: "2023",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tania Akter",
    class: "Class Ten",
    roll: "2",
    year: "2023",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mazharul Islam",
    class: "Class Nine",
    roll: "1",
    year: "2023",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Rahman Hossain",
    class: "Class Five",
    roll: "2",
    year: "2023",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Nahidul Islam",
    class: "Class Ten",
    roll: "1",
    year: "2023",
    image: "https://via.placeholder.com/150",
  },
];

const StudentCarousel = () => {
  return (
    <div className="w-full  mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-main-color">
        Best Students
      </h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {students.map((student, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center my-2">
              <img
                src={StuImg}
                alt={student.name}
                className="w-40 h-40 mx-auto rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{student.name}</h3>
              <p className="text-gray-600">{student.class}</p>
              <p className="text-sm text-gray-500">
                Roll: {student.roll} | Year: {student.year}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentCarousel;
