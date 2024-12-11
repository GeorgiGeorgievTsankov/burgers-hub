import React from "react";
import { useSelector } from "react-redux";

function ThankYouPage() {
  const name = useSelector((state) => state.user.username);

  console.log(name);

  if (!name) return null;

  return (
    <div className="bg-enjoy-bg min-h-screen bg-cover flex bg-center items-center justify-center">
      <div className="flex justify-center align-middle flex-col text-center bg-green-950/50 p-5 rounded-lg">
        <h1 className="text-5xl font-bold text-white">
          Thank you for your order {name} !
        </h1>
        <p className="text-white text-4xl  m-4">
        Your order is being prepared. Thank you for choosing us!
        </p>
        <button
          className="w-[200px] bg-gray-800 m-auto text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ThankYouPage;
