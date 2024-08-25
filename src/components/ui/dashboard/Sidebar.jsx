import React from "react";
import {
  FaSchool,
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-200 p-4 w-16 sm:w-48">
      <ul className="space-y-4">
        <li className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2">
            <FaSchool className="text-xl" />
            <span className="hidden sm:inline">School</span>
          </NavLink>
        </li>
        <li className="flex items-center gap-2">
          <NavLink to="/university" className="flex items-center gap-2">
            <FaUniversity className="text-xl" />
            <span className="hidden sm:inline">University</span>
          </NavLink>
        </li>
        <li className="flex items-center gap-2">
          <NavLink to="/student" className="flex items-center gap-2">
            <FaUserGraduate className="text-xl" />
            <span className="hidden sm:inline">Student</span>
          </NavLink>
        </li>
        <li className="flex items-center gap-2">
          <NavLink to="/teacher" className="flex items-center gap-2">
            <FaChalkboardTeacher className="text-xl" />
            <span className="hidden sm:inline">Teacher</span>
          </NavLink>
        </li>
        <li className="flex items-center gap-2">
          <NavLink to="/setting" className="flex items-center gap-2">
            <FaCog className="text-xl" />
            <span className="hidden sm:inline">Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
