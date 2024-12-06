import React from "react";


const Footer = () => {
    return (
      <footer className="bg-black p-4 flex justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Left */}
          <p className="text-sm text-white text-center">
            &copy; {new Date().getFullYear()} BURGERS<span className="text-red-600">HUB</span>. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  