import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-zinc-950/50 text-white py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          BURGERS<span className="text-red-600">HUB</span>
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-red-600 text-lg">
            Home
          </Link>
          <Link to="/menu" className="hover:text-red-600 text-lg ">
            Menu
          </Link>
          <Link to="/menu" className="hover:text-red-600 text-lg ">
            Contact
          </Link>
        </nav>

        {/* Phone */}
        <div className="md:hidden">
          <button className="text-white">
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
