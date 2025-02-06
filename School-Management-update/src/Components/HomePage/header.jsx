import React from "react";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-main-color text-white px-4 py-10">
      <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center w-36 ">
          <img src={Logo} alt="School Logo" className="h-auto w-full" />
        </div>

        {/* School Name Section (Centered) */}
        <div className="container mx-auto flex flex-col items-center">
          {/* School Name Section */}
          <h1 className="text-4xl uppercase sm:text-4xl font-extrabold text-white ">
            Adamjee Cantonment College
          </h1>
          <div className="w-full sm:w-auto">
            <h2 className="text-lg sm:text-xl font-bold text-slate-100 mt-2 text-left sm:text-center">
              Education | Discipline | Morality
            </h2>
            <p className="text-sm sm:text-base text-slate-100 font-semibold text-left sm:text-center ">
              EIIN: 104696 | School Code: 3124
            </p>
          </div>
        </div>

        {/* Login Button */}
        <div className="mt-4 sm:mt-0">
          <button
            type="button"
            className="bg-secondary-colour border border-opacity-10 text-white hover:text-white px-6 py-2 rounded-btn-radius hover:bg-main-color border-secondary-colour  hover:border-black"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
