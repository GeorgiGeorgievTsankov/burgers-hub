import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  
    const totalQuantity = useSelector(getTotalCartQuantity);

  return (
    <div>
      <Link to="/cart">
        {/* <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>{totalCartQuantity} pizzas</span>
        </p> */}
        <span className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            className="cursor-pointer fill-[#fcf9f9] hover:fill-[#007bff] inline"
            viewBox="0 0 512 512"
          >
            <path
              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
              data-original="#000000"
            ></path>
          </svg>
          <span className="absolute left-auto -ml-1 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs text-white">
            {totalQuantity}
          </span>
        </span>
      </Link>
    </div>
  );
}

export default CartOverview;
