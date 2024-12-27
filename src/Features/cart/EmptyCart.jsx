import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="bg-empty-bg  px-4 py-3 flex justify-start align-middle h-80 min-h-screen bg-cover bg-center">
      <div className="m-auto flex justify-center align-middle flex-col  bg-green-950/50 p-5 rounded-lg">
        <Link to="/menu" className="text-blue-700 text-2xl font-semibold">
          ← Back to menu
        </Link>
        <p className="mt-7 font-semibold text-5xl text-white drop-shadow-xl">
  Your cart is still empty. Start adding some pizzas :)
</p>

      </div>
    </div>
  );
}

export default EmptyCart;
