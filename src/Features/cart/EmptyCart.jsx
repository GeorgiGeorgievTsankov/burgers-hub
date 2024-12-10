import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="px-4 py-3 flex justify-start align-middle h-80">
     <div className="m-auto"> <Link to="/menu" className="text-blue-700 font-semibold"> ← Back to menu</Link>
      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p></div>
    </div>
  );
}

export default EmptyCart;
