import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function goToMenu() {
    navigate("/menu");
  }

  return (
    <div className="min-h-screen bg-not-found bg-cover bg-center flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-7xl font-bold">404 Page Not Found</h1>
        <div className="flex w-full justify-center pt-5">
          <button
            className="px-2 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
            onClick={goToMenu}
          >
            Go to menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
