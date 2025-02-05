const LatestNews = () => {
  const news = [
    "বেসরকারি বিদ্যালয়সমূহে ভর্তি - ২০২৫ || ২০২৬",
    "নতুন শিক্ষাবর্ষের ক্লাস শুরু হবে আগামী মাসে",
    "পরীক্ষার ফলাফল প্রকাশিত হয়েছে",
  ];

  return (
    <div className="py-2 shadow-lg rounded-lg mb-6">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Title Section (Fixed Left) */}
        <div className="bg-main-color text-white px-6 py-2 font-bold text-lg rounded-l-md whitespace-nowrap">
          Latest News :
        </div>

        {/* Scrolling News Section */}
        <div className="bg-white px-1 py-2 w-full overflow-hidden rounded-r-md shadow-md">
          <marquee behavior="scroll" direction="left" scrollAmount="5">
            {news.map((item, index) => (
              <span
                key={index}
                className="mx-6 text-gray-800 text-sm md:text-base"
              >
                {item} 🔹
              </span>
            ))}
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
