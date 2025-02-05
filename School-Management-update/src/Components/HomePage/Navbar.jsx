import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#" },
    { name: "Student", dropdown: ["Profile", "Courses", "Attendance"] },
    { name: "Teacher/Staff", dropdown: ["Staff List", "Schedule", "Leave"] },
    { name: "Academics", dropdown: ["Syllabus", "Classes", "Exams"] },
    { name: "Information", dropdown: ["Events", "News", "Announcements"] },
    { name: "Digital Campus", dropdown: ["E-Library", "Online Classes"] },
    { name: "Result", dropdown: ["Exam Results", "Reports"] },
    { name: "Notice", link: "#" },
    { name: "Photo Gallery", dropdown: ["Albums", "Recent Events"] },
    { name: "Download", dropdown: ["Forms", "Documents"] },
    { name: "Routine", dropdown: ["Class Routine", "Exam Routine"] },
    { name: "Admission", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  return (
    <nav className="bg-green-500 text-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.link ? (
                <a href={item.link} className="hover:text-yellow-400">
                  {item.name}
                </a>
              ) : (
                <button
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="focus:outline-none hover:text-red-600"
                >
                  {item.name} &#9662;
                </button>
              )}
              {item.dropdown && openDropdown === index && (
                <div
                  className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-lg py-2"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none text-xl"
          >
          < MenuIcon />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-main-color text-white py-2 px-4">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-2">
              {item.link ? (
                <a href={item.link} className="block py-2">
                  {item.name}
                </a>
              ) : (
                <div>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    className="w-full text-left py-2 focus:outline-none"
                  >
                    {item.name} &#9662;
                  </button>
                  {item.dropdown && openDropdown === index && (
                    <div className="pl-4 mt-1">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block py-1 hover:text-yellow-400"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
