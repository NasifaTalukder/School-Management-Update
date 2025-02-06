import { useEffect, useRef, useState } from "react";
import { CiCalendar, CiFolderOn } from "react-icons/ci";
import DuetLogo from "../../assets/duet-logo.png";
export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState("Notices");

  const notices = [
    {
      date: "04 FEB",
      year: "2025",
      text: "পরীক্ষার হলে অনধিকার প্রবেশের নোটিশ",
    },
    {
      date: "04 FEB",
      year: "2025",
      text: "জাতীয় প্রযুক্তি দিবস উদযাপনের লক্ষ কর্মসূচি",
    },
    { date: "29 JAN", year: "2025", text: "শৃঙ্খলা বজায় রাখার জন্য নোটিশ" },
    { date: "27 JAN", year: "2025", text: "ভর্তির বাসা বাতিল" },
    {
      date: "27 JAN",
      year: "2025",
      text: "আবাসিক হলে সিট বাতিল সংক্রান্ত বিজ্ঞপ্তি",
    },
  ];
  const news = [
    {
      date: "05 FEB",
      year: "2025",
      text: "বিশ্ববিদ্যালয়ের নতুন শিক্ষাবর্ষের ক্লাস শুরুর ঘোষণা",
    },
    {
      date: "03 FEB",
      year: "2025",
      text: "বিজ্ঞান ও প্রযুক্তি মেলার সময়সূচি প্রকাশিত",
    },
    {
      date: "31 JAN",
      year: "2025",
      text: "শিক্ষার্থীদের বৃত্তি আবেদন জমা দেওয়ার শেষ তারিখ ঘোষণা",
    },
    {
      date: "30 JAN",
      year: "2025",
      text: "বিশ্ববিদ্যালয়ের ক্রীড়া প্রতিযোগিতার ফলাফল প্রকাশিত",
    },
    {
      date: "28 JAN",
      year: "2025",
      text: "লাইব্রেরির সময়সূচিতে পরিবর্তন সংক্রান্ত বিজ্ঞপ্তি",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const tickerRef = useRef(null);

  useEffect(() => {
    let animation;
    if (!isPaused) {
      animation = tickerRef.current.animate(
        [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],
        {
          duration: 10000, // Adjust speed
          iterations: Infinity,
          easing: "linear",
        }
      );
    }
    return () => animation?.cancel();
  }, [isPaused]);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-xl">
      <div className="relative w-full overflow-hidden py-2 border-b">
        <div className="w-full overflow-hidden bg-gray-100 py-2">
          <h2 className="text-center text-secondary-colour font-bold text-base">
            Events
          </h2>
        </div>
        <div
          ref={tickerRef}
          className="whitespace-nowrap flex items-center gap-4 py-2 px-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-5 items-center mx-6">
            <img
              src={DuetLogo}
              alt="Event Logo"
              className="w-8 h-8 inline-block"
            />
            <div className="flex flex-col gap-2">
              <span className="text-secondary-colour font-medium text-sm">
                BUET TECHFEST 2K23 - Grand Festival for Technology Enthusiasts.
              </span>
              <span className="text-gray-500 flex item-center gap-2 text-sm">
                <CiCalendar size="20" /> July 14, 2023
              </span>
            </div>
          </div>

          <div className="flex gap-5 items-center mx-6">
            <img
              src={DuetLogo}
              alt="Event Logo"
              className="w-8 h-8 inline-block"
            />
            <div className="flex flex-col gap-2">
              <span className="text-secondary-colour font-medium text-sm">
                BUET TECHFEST 2K23 - Grand Festival for Technology Enthusiasts.
              </span>
              <span className="text-gray-500 flex item-center gap-2 text-sm">
                {" "}
                <CiCalendar size="20" /> July 14, 2023
              </span>
            </div>
          </div>

          <div className="flex gap-5 items-center mx-6">
            <img
              src={DuetLogo}
              alt="Event Logo"
              className="w-8 h-8 inline-block"
            />
            <div className="flex flex-col gap-2">
              <span className="text-secondary-colour font-medium text-sm">
                BUET TECHFEST 2K23 - Grand Festival for Technology Enthusiasts.
              </span>
              <span className="text-gray-500 flex item-center gap-2 text-sm">
                {" "}
                <CiCalendar size="20" /> July 14, 2023
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex mt-4 border-b">
        {["Notices", "News"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 font-semibold text-center ${
              activeTab === tab
                ? "bg-white border-b-2 border-main-color text-main-color"
                : "text-gray-500 bg-[#F7F7F7] "
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notice Cards */}
      {activeTab === "Notices" ? (
        <div className="mt-4 h-60 overflow-y-auto space-y-3 custom-scrollbar">
          {notices.map((notice, index) => (
            <div key={index} className="flex items-start space-x-3 p-3  ">
              <div className="bg-secondary-colour text-white px-3 py-2 rounded-md text-center">
                <span className="block text-sm font-bold">{notice.date}</span>
                <span className="block text-xs">{notice.year}</span>
              </div>
              <div>
                <p className="text-gray-700 mb-1">{notice.text}</p>
                <div className="flex items-center gap-1 text-gray-500">
                  <CiFolderOn />
                  <a href="" className="text-sm">
                    Others
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 h-60 overflow-y-auto space-y-3 custom-scrollbar">
          {news.map((notice, index) => (
            <div key={index} className="flex items-start space-x-3 p-3  ">
              <div className="bg-red-500 text-white px-3 py-2 rounded-md text-center">
                <span className="block text-sm font-bold">{notice.date}</span>
                <span className="block text-xs">{notice.year}</span>
              </div>
              <div>
                <p className="text-gray-700 mb-1">{notice.text}</p>
                <div className="flex items-center gap-1 text-gray-500">
                  <CiFolderOn />
                  <a href="" className="text-sm">
                    Others
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
