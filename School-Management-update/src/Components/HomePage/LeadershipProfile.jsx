import React, { useState } from "react";
import LeaderImage from "../../assets/LeaderImage.jpeg";

export default function LeadershipProfile() {
  const [showMore, setShowMore] = useState(false); // State to toggle "Read More" text

  const toggleText = () => {
    setShowMore(!showMore); // Toggle between showing and hiding the additional text
  };

  return (
    <div className="max-w-4xl mx-auto my-6 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-3">সভাপতি</h2>
      <div className="flex items-center">
        <img
          src={LeaderImage}
          alt="Chairman"
          className="w-20 h-20 rounded-full mr-4"
        />
        <p className="text-gray-700">
          আধুনিক ও যুগোপযোগী শিক্ষা ছাড়া আত্বনির্ভরশীল,দক্ষ ও মর্যাদা সম্পন্ন
          জাতি গঠন সম্ভব নয়। তথ্য-প্রযুক্তি আজকের শিক্ষা ব্যবস্থার সাথে অত্যন্ত
          ঘনিষ্ট ভাবে জড়িত। পৃথিবীর সকল দেশ জুড়ে প্রযুক্তির ব্যবহার বিস্ময়কর
          ভাবে বেড়ে চলছে। দক্ষ ও যোগ্য মানব সম্পদ তৈরীর লক্ষ্যে সরকার ২০১০ সালে
          প্রণীত জাতীয় শিক্ষানীতিতে ৬ষ্ঠ থেকে দ্বাদশ শ্রেণী পর্যন্ত তথ্য ও
          যোগাযোগ প্রযু্িক্ত বিষয়টিকে বাধ্যতামূলক করেছেন। এ প্রত্যয় ও প্রনোদনা
          থেকেই জাতীয় শিক্ষানীতি ২০১০ প্রণীত হয়।
          {showMore && (
            <span>
              {/* Additional text that will be revealed when the "Read More" button is clicked */}
              এ শিক্ষানীতিতে বিজ্ঞান, তথ্য ও যোগাযোগ প্রযুক্তি, কারিগরী শিক্ষা,
              ধর্ম ও নৈতিক শিক্ষাকে প্রাধান্য দেওয়া হয়েছে। ইতোমধ্যে সকল
              সরকারি-বেসরকারি দপ্তর সমূহকে ডিজিটাল পদ্ধতির মাধ্যমে চলাচল করতে
              উৎসাহিত করা হয়েছে।
            </span>
          )}
        </p>
      </div>
      <button
        onClick={toggleText}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
