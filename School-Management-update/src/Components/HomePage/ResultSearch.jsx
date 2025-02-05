import React, { useState } from "react";

const ResultSearch = () => {
  const [className, setClassName] = useState("");
  const [department, setDepartment] = useState("");
  const [session, setSession] = useState("");
  const [exam, setExam] = useState("");

  return (
    <div className="bg-white p-[19px] rounded-lg drop-shadow-lg mt-12">
      <h2 className="text-2xl font-semibold text-center mb-4">Result Search</h2>
      <form className="space-y-3">
        {/* Class */}
        <div>
          <label htmlFor="class" className="block text-lg font-semibold text-gray-700">
            Class Roll*
          </label>
          <select
            id="class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="mt-2 w-full p-2 border rounded-lg text-gray-700"
          >
            <option value="">Select Class</option>
            <option value="class1">Class 1</option>
            <option value="class2">Class 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Department/Section/Group */}
        <div>
          <label htmlFor="department" className="block text-lg font-semibold text-gray-700">
            Department/Section/Group*
          </label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="mt-2 w-full p-2 border rounded-lg text-gray-700"
          >
            <option value="">Select Department</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Session */}
        <div>
          <label htmlFor="session" className="block text-lg font-semibold text-gray-700">
            Session*
          </label>
          <select
            id="session"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            className="mt-2 w-full p-2 border rounded-lg text-gray-700"
          >
            <option value="">Select Session</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Exam */}
        <div>
          <label htmlFor="exam" className="block text-lg font-semibold text-gray-700">
            Exam*
          </label>
          <select
            id="exam"
            value={exam}
            onChange={(e) => setExam(e.target.value)}
            className="mt-2 w-full p-2 border rounded-lg text-gray-700"
          >
            <option value="">Select Exam</option>
            <option value="ssc">SSC</option>
            <option value="hsc">HSC</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 bg-main-color text-white rounded-btn-radius hover:bg-secondary-colour"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ResultSearch;
