import React from "react";
import Teacher1 from "../../assets/teacher-1.jpg";

const TeachersSection = () => {
  const teachers = [
    { name: "John Doe", subject: "Math", image: Teacher1 },
    { name: "Jane Smith", subject: "Science", image: Teacher1 },
    { name: "Mark Johnson", subject: "English", image: Teacher1 },
  ];

  return (
    <div className="p-6 rounded-lg shadow-md w-full mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Teachers</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-main-color transition-all  duration-1000 bg-opacity-100 flex justify-center items-center text-white py-2 opacity-0 group-hover:opacity-100 ">
              <div className="text-center">
                <h3 className="text-xl font-semibold">{teacher.name}</h3>
                <p className="text-lg">{teacher.subject}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-main-color text-white px-6 py-2 rounded-btn-radius hover:bg-green-700 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default TeachersSection;
