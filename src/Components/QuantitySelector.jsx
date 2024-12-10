import React from "react";
import { useDispatch } from "react-redux";

import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../Features/cart/cartSlice";


const QuantitySelector = ({ pizzaId, currentQuantity }) => {
    const dispatch = useDispatch();

  return (
    <div className="align-middle font-bold">
      <div className="flex divide-x border w-max rounded-lg overflow-hidden">
        {/* Minus Button */}
        <button
          type="button"
          className="flex items-center justify-center bg-gray-100 lg:w-10 lg:h-10 w-6 h-6 font-semibold"
          onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-current"
            viewBox="0 0 124 124"
          >
            <path
              d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
              data-original="#000000"
            ></path>
          </svg>
        </button>

        {/* Quantity Display */}
        <button
          type="button"
          className="bg-transparent lg:w-10 lg:h-10 w-6 h-6 font-semibold text-gray-800 text-base"
        >
          {currentQuantity}
        </button>

        {/* Plus Button */}
        <button
          type="button"
          className="flex justify-center items-center bg-gray-800 text-white w-6 h-6 lg:w-10 lg:h-10 font-semibold"
          onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-current"
            viewBox="0 0 42 42"
          >
            <path
              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
              data-original="#000000"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
