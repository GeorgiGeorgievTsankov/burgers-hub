import React from "react";


const Footer = () => {
    return (
      <footer className="bg-black p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Left */}
          <p className="text-sm text-white text-center sm:text-left">
            &copy; {new Date().getFullYear()} BURGERS<span className="text-red-600">HUB</span>. All Rights Reserved.
          </p>
  
          {/* Right */}
          <nav className="mt-2 sm:mt-0 flex space-x-4">
            <a href="/" className="text-white hover:text-red-600">
              Home
            </a>
            <a href="/menu" className="text-white hover:text-red-600">
              Menu
            </a>
            <a href="/contact" className="text-white hover:text-red-600">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  