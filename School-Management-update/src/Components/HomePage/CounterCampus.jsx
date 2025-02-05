import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

const UniversityStatistics = () => {
  const stats = [
    { icon: <FaChalkboardTeacher />, value: "267+", label: "Teacher" },
    { icon: <FaUserTie />, value: "163+", label: "Officer" },
    { icon: <FaUsers />, value: "3515+", label: "Current Students" },
    { icon: <FaUserGraduate />, value: "0+", label: "Graduate Students" },
  ];

  return (
    <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row mt-20 items-center justify-between">
      {/* Statistics Box */}
      <div className="w-[600px] grid grid-cols-2 gap-6 bg-white shadow-lg p-6 rounded-xl">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100">
              <div className="text-main-color text-3xl">{item.icon}</div>
            </div>
            <h2 className="text-3xl font-bold mt-3">{item.value}</h2>
            <p className="text-[#c9c9c9] text-base mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* University Statistics Text Section */}
      <div className="max-w-xl">
        <h2 className="text-2xl font-bold">University Statistics</h2>
        <p className="text-gray-700 mt-4">
          September 1, 2003, became a historic day when the IUT became an
          autonomous statutory organization of the Government of Bangladesh
          under Dhaka University of Engineering and Technology. Covering 21
          acres, IUT provides high-quality research and education through 4
          departments.
        </p>
        <button className="mt-4 bg-main-color text-white px-6 py-2 rounded-btn-radius hover:bg-secondary-colour">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default UniversityStatistics;
