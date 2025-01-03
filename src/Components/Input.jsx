import React from "react";

function Input({ value, onChange, placeholder, className }) {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-3 pr-10 py-2 bg-slate-300/25 placeholder:text-white text-white text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-200 hover:border-slate-300 shadow-sm focus:shadow"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute w-5 h-5 top-2.5 right-2.5 text-white"
        >
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Input;
