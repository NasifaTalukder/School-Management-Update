import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LiaFaxSolid } from "react-icons/lia";
import { MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Academic & Admission */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Academic & Admission
          </h3>
          <ul className="space-y-2">
            {[
              "Academic Calendar",
              "Academic Collaboration",
              "Admission for Undergraduate",
              "Admission for Postgraduate",
              "Dean’s List",
              "Department",
              "DUET Journal Access",
              "e-Learning Platform",
              "eRegistration (Undergraduate)",
              "eRegistration (Postgraduate)",
              "Institute",
              "Publication",
              "Scholarship/Funding",
            ].map((item, index) => (
              <li key={index} className="hover:text-green-400 cursor-pointer">
                <div className="flex gap-1">
                  <MdKeyboardArrowRight className="text-secondary-colour" />{" "}
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "Account Manual",
              "APA & National Integrity Strategy",
              "Calendar 2025",
              "Convocation",
              "DUET Clubs & Communities",
              "Downloadable Forms",
              "DUET Alumni Association",
              "DUET Directory App",
              "Latest News",
              "Holiday List",
              "Online Job Application Portal",
              "Phonebook",
              "Services",
              "University Act-2003",
            ].map((item, index) => (
              <li key={index} className="hover:text-third-color cursor-pointer">
                <div className="flex gap-1">
                  <MdKeyboardArrowRight className="text-secondary-colour" />{" "}
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information & Map */}
        <div>
          <iframe
            className="w-full h-64 mb-4 border-2 border-main-color"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            allowFullScreen
            loading="lazy"
          ></iframe>
          <ul className="space-y-2">
            <li>
              <div className="flex flex-wrap justify-start gap-1 items-center">
                <div className=" bg-main-color p-1 text-white rounded-full">
                  <CiLocationOn />{" "}
                </div>
                <span className="font-semibold">Mailing Address:</span>{" "}
                Registrar, Dhaka University of Engineering & Technology
              </div>
            </li>
            <li>
              <div className="flex flex-wrap justify-start gap-1 items-center">
                <div className=" bg-main-color p-1 text-white rounded-full">
                  <IoCallOutline />{" "}
                </div>
                <span className="font-semibold">Phone:</span> +88-02-49274003
              </div>
            </li>
            <li>
              <div className="flex flex-wrap justify-start gap-1 items-center">
                <div className=" bg-main-color p-1 text-white rounded-full">
                  <LiaFaxSolid />{" "}
                </div>
                <span className="font-semibold">Fax:</span> +88-02-49274001-02
              </div>
            </li>
            <li>
              <div className="flex flex-wrap justify-start gap-1 items-center">
                <div className=" bg-main-color p-1 text-white rounded-full">
                  <MdOutlineEmail />{" "}
                </div>
                <span className="font-semibold">Email:</span> [email protected]
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p>
          DUET © Copyright 2025 | All Rights Reserved | Powered by Codex Devware
        </p>
        <p>Last Update: Feb 05, 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
