import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../cart/cartSlice";
import { updateName } from "../user/userSlice";

function ThankYouPage() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.username);

  useEffect(() => {
    dispatch(updateName());
    dispatch(clearCart());
  }, []);

  setTimeout(() => {
    window.location.href = "/";
  }, 3000);

  return (
    <div className="bg-enjoy-bg min-h-screen bg-cover flex bg-center items-center justify-center">
      <div className="flex justify-center align-middle flex-col text-center bg-green-950/50 p-5 rounded-lg">
        <h1 className="text-5xl font-bold text-white">
          Thank you for your order {name} !
        </h1>
        <p className="text-white text-4xl  m-4">
          Your order is being prepared. Thank you for choosing us!
        </p>
      </div>
    </div>
  );
}

export default ThankYouPage;
