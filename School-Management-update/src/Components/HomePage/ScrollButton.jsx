import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => setScrollPercentage(scrollPercent));
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-7">
      <button
        onClick={handleClick}
        className="relative flex items-center justify-center w-14 h-14 rounded-full  shadow-sm transition-all duration-300 ease-in-out"
      >
        {/* Smooth Circular Progress Bar */}
        <svg className="absolute w-full h-full" viewBox="0 0 36 36">
          <path
            className="text-gray-200"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
          />
          <path
            className="text-[#426fca] transition-[stroke-dashoffset] duration-500 ease-out"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset={`${100 - scrollPercentage}`}
            d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
          />
        </svg>

        <ArrowUp className="text-[#426fca]" />
      </button>
    </div>
  );
};

export default ScrollToTop;
