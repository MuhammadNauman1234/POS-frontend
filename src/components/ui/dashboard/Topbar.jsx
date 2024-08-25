import React, { useState } from "react";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-orange-300 flex px-4 justify-between h-20 items-center">
      <div>
        <h1 className="text-xl font-bold">Learner</h1>
      </div>
      <div className="hidden sm:flex gap-5">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute h-lvh top-9 right-0 bg-orange-500 shadow-lg p-10 sm:hidden">
          <ul className="flex flex-col gap-3">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Topbar;
