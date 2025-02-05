import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">📞 CONTACT US</h2>
          <p className="text-gray-300">
            <strong>Bon Gobeshonagar High School</strong>
            <br />
            Sholoshohor, Panchlaish, Amin Jute Mills - 4211, Panchlaish, Chittagong
            <br />
            <strong>Phone:</strong> +880241380336, <strong>Mobile:</strong> 01647-574710
            <br />
            <strong>Email:</strong> <a href="mailto:tghsbd104696@gmail.com" className="underline">tghsbd104696@gmail.com</a>
          </p>
        </div>

        {/* Important Links Section */}
        <div>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">🔗 IMPORTANT LINKS</h2>
          <ul className="space-y-2 text-gray-300">
            <li>📌 <a href="#" className="hover:text-gray-100">Chittagong Education Board</a></li>
            <li>📌 <a href="#" className="hover:text-gray-100">শিক্ষক বাতায়ন</a></li>
            <li>📌 <a href="#" className="hover:text-gray-100">Multimedia Class Management System</a></li>
            <li>📌 <a href="#" className="hover:text-gray-100">Institution Management System</a></li>
            <li>📌 <a href="#" className="hover:text-gray-100">Bangladesh Portal</a></li>
            <li>📌 <a href="#" className="hover:text-gray-100">Ministry of Education</a></li>
            <li>📌 <a href="#" className="hover:text-gray-100">National University</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">🌐 FOLLOW US</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-main-color p-3 rounded-full hover:bg-secondary-colour">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="#" className="bg-main-color p-3 rounded-full hover:bg-secondary-colour">
              <FaTwitter className="text-white text-lg" />
            </a>
            <a href="#" className="bg-main-color p-3 rounded-full hover:bg-secondary-colour">
              <FaGooglePlusG className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Developer Info */}
      <div className="text-center text-gray-300 mt-8 border-t pt-4">
        <p>© 2015 Bon Gobeshonagar High School. All Rights Reserved.</p>
        <p>Powered by: <strong>Shikhaloy</strong> | Developed by: <strong>IT Point BD</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
