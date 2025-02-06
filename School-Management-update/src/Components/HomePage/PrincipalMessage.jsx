import React from "react";
import PrincipalImage from "../../assets/head-teacher.png";

const PrincipalMessage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-full">
      <img
        src={PrincipalImage}
        alt="Principal"
        className="w-28 h-28 object-cover rounded-full border-2 border-gray-300 shadow-lg mb-4"
      />
      <p className="text-gray-700 text-lg mb-4">
        বন গবেষণাগার উচ্চ বিদ্যালয়ের প্রতিষ্ঠাকালীন বন গবেষণা ইনষ্টিটিউট,
        চট্টগ্রাম এ কর্মরত কর্মকর্তা ও কর্মচারীদের সক্রিয় সহযোগিতায় মনোরম
        প্রাকৃতিক পরিবেশে ১৯৭৭ সালে বন গবেষণাগার আবাসিক এলাকায় “বন গবেষণাগার
        প্রাথমিক বিদ্যা নিকেতন” নামে বিদ্যালয়টি প্রতিষ্ঠিত হয়। দীর্ঘদিন পর ১৯৮৯
        সালে প্রাথমিক বিদ্যালয়টি নিম্ন মাধ্যমিক বিদ্যালয় হিসাবে স্বীকৃতি লাভ করে
      </p>
      <button className="px-4 py-2 bg-secondary-colour text-white rounded-btn-radius hover:bg-secondary-colour">
        VIEW MORE →
      </button>
      <p className="text-gray-800 font-semibold mt-3">
        - Dr. Md. Arefin Kowser -
      </p>
      <p className="text-gray-500">Pro-Vice-Chancellor</p>
    </div>
  );
};

// const MainSection = () => {
//   return (

//   );
// };

export default PrincipalMessage;
