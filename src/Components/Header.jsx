import React from "react";
import Username from "../Features/user/UserName";
import CartOverview from "../Features/cart/CartOverview";

const Header = () => {


  
  return (
    <header className="bg-zinc-950/50 text-white py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}

        <h1 className="text-xl font-bold">
          BURGERS<span className="text-red-600">HUB</span>
        </h1>

        {/* Menu */}
        <nav className="md:flex space-x-6">
          <div className="hidden md:flex space-x-6 bg-slate-300/50 items-center rounded-md justify-center">
            <Username />
          </div>
          <div className="m-auto ">
            <CartOverview />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
