import React, { useState } from "react";

import { getCart, clearCart, getTotalCartPrice, deleteItem } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import QuantitySelector from "../../Components/QuantitySelector";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
  const [shipping, setShipping] = useState(2);
  const [tax, setTax] = useState(2);
  const finalPrice = totalCartPrice + tax + shipping;

  if (!cart.length) return <EmptyCart />;

  return (
    <div class="font-sans min-h-screen max-w-5xl max-md:max-w-xl mx-auto bg-white py-4 pt-20 px-2">
      <h1 class="text-3xl md:text-7xl font-bold text-gray-800 text-center">
        Shopping Cart
      </h1>

      <div class="flex flex-col md:flex-row gap-8 mt-16">
        {/* Pizza section */}
        <div class="flex-1 p-1">
          <div class="grid grid-cols-1 md:grid-cols-1 gap-8">
            {cart.map((item) => (
              <div key={item.pizzaId} class="space-y-4">
                <div class="grid grid-cols-3 items-start gap-4">
                  <div class="col-span-2 flex items-start gap-4">
                    <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                      <img
                        src={item.itemImg}
                        class="w-full h-full object-contain"
                      />
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-xl font-bold text-gray-800">
                        {item.name}
                      </h3>
                      <p class="text-sm font-semibold text-gray-500 mt-0.5">
                        Price: {item.unitPrice}
                      </p>
                      <button
                        onClick={() => dispatch(deleteItem(item.pizzaId))}
                        type="button"
                        class="mt-6 font-semibold text-red-500 text-sm flex items-center gap-1 shrink-0"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                  <div class="ml-auto">
                    <h4 class="text-xl max-sm:text-base font-bold text-gray-800 pb-2">
                      ${item.totalPrice.toFixed(2)}
                    </h4>
                    <QuantitySelector
                      pizzaId={item.pizzaId}
                      currentQuantity={item.quantity}
                    />
                  </div>
                </div>
                <hr class="border-gray-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div class="w-full md:w-1/3 bg-gray-100 rounded-md p-4 h-max">
          <h3 class="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
            Order Summary
          </h3>
          <ul class="text-gray-800 mt-6 space-y-3">
            <li class="flex flex-wrap gap-4 text-sm">
              Subtotal{" "}
              <span class="ml-auto font-bold">
                ${totalCartPrice.toFixed(2)}
              </span>
            </li>
            <li class="flex flex-wrap gap-4 text-sm">
              Shipping <span class="ml-auto font-bold">${shipping}.00</span>
            </li>
            <li class="flex flex-wrap gap-4 text-sm">
              Tax <span class="ml-auto font-bold">${tax}.00</span>
            </li>
            <li class="flex flex-wrap gap-4 text-base font-bold">
              Total <span class="ml-auto">${finalPrice.toFixed(2)}</span>
            </li>
          </ul>
          <div class="mt-6 space-y-3">
            <Link to="/order">
              <button
                type="button"
                class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
              >
                Checkout
              </button>
            </Link>
            <Link to="/menu">
              <button
                type="button"
                class="text-sm px-4 mt-2 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
              >
                Continue Shopping
              </button>
            </Link>
            <button
              onClick={() => dispatch(clearCart())}
              type="button"
              class="text-sm px-4 py-2.5 w-full font-bold tracking-wide bg-transparent text-red-600 border border-gray-300 rounded-md"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;