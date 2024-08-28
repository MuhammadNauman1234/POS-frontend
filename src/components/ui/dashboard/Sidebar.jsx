import React, { useState } from "react";
import {
  FaSchool,
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div>
      {/* Hamburger Icon for small screens */}
      <div className="sm:hidden p-4">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-200 p-4 w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 sm:flex sm:flex-col h-full z-50`}
      >
        {/* Close Icon for small screens */}
        <div className="flex justify-between items-center sm:hidden">
          <h2 className="text-xl font-bold">Menu</h2>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="">
          <li
            className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-300 rounded"
            onClick={() => handleNavigation("/")}
          >
            <FaSchool className="text-xl" />
            <span className="sm:inline">School</span>
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-300 rounded"
            onClick={() => handleNavigation("/university")}
          >
            <FaUniversity className="text-xl" />
            <span className="sm:inline">University</span>
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-300 rounded"
            onClick={() => handleNavigation("/student")}
          >
            <FaUserGraduate className="text-xl" />
            <span className="sm:inline">Student</span>
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-300 rounded"
            onClick={() => handleNavigation("/teacher")}
          >
            <FaChalkboardTeacher className="text-xl" />
            <span className="sm:inline">Teacher</span>
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-300 rounded"
            onClick={() => handleNavigation("/settings")}
          >
            <FaCog className="text-xl" />
            <span className="sm:inline">Settings</span>
          </li>
        </ul>
      </div>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
