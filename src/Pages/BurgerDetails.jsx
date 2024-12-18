import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Review from "../Components/Review";
import QuantitySelector from "../Components/QuantitySelector";
import { addItem, getCurrentQuantityById } from "../Features/cart/cartSlice";
import DeleteItem from "../Features/cart/DeleteItem";

function BurgerDetails() {
  const { pizzaId } = useParams();
  const menu = useSelector((state) => state.menu?.items);

  const dispatch = useDispatch();

  if (!menu || menu.length === 0) {
    return <p>Loading menu data...</p>;
  }

  const pizza = menu.find((b) => b.id === Number(pizzaId));

  if (!pizza) {
    return <p>Pizza not found!</p>;
  }

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
      itemImg: imageUrl,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div className="bg-paper-bg bg-center bg-cover h-auto w-full justify-around px-28 flex flex-col md:flex-row pt-16">
      {/* <!-- Box-1 (35% with) --> */}
      <div className="w-[400px] pt-14 flex flex-col space-y-6">
        {/* Ingredients */}
        <div className="relative bg-white px-2 py-5 rounded-lg shadow-2xl">
          <div className="absolute text-center bg-gray-800 text-white text-2xl px-4 py-1 rounded-lg top-[-20px] left-1/2 transform -translate-x-1/2">
            <strong>Ingredients:</strong>
          </div>
          <p className="text-gray-800 text-2xl text-center mt-10">
            {pizza.ingredients.join(", ")}
          </p>
        </div>
        {/* Radio button */}
        <div className="relative bg-white px-12 py-10 rounded-lg shadow-2xl">
          <div className="">
            {/* First */}
            <label className="flex items-center space-x-4">
              <input
                type="radio"
                name="pizzaType"
                value="Classic Sesame Bun"
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-xl text-gray-800">Classic Sesame Bun</span>
            </label>

            {/* Second */}
            <label className="flex items-center space-x-4">
              <input
                type="radio"
                name="pizzaType"
                value="Brioche Bun"
                className="w-5 h-5 text-gray-800 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-xl text-gray-800">Brioche Bun</span>
            </label>
          </div>
        </div>

        {/* Review */}
        <Review />

        {/* "Back to Menu" */}
        <div className="flex w-full justify-start pt-5">
          <button
            className="w-[200px] bg-gray-800 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
            onClick={() => window.history.back()}
          >
            Back to Menu
          </button>
        </div>
      </div>

      {/* <!-- Box-2 (65% with) --> */}
      <div className="w-full md:w-3/5 flex flex-col gap-6">
        {/* Image Section */}
        <div className="flex-1 h-2/3 p-4 md:p-10 flex items-center justify-center">
          <img
            src={pizza.imageUrl}
            alt={pizza.name}
            className="w-full h-full max-h-[300px] md:max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-gray-800">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-3xl md:text-5xl font-bold p-2">{pizza.name}</h2>
            <h2 className="text-xl md:text-3xl font-bold">390 г</h2>
          </div>
        </div>

        {/* Price, Quantity, and Buttons Section */}
        <div className="text-gray-800 flex-1 flex flex-col md:flex-row justify-between items-center gap-4 p-4">
          {/* Price */}
          <div className="text-2xl md:text-3xl">
            <strong>Price:</strong> ${pizza.unitPrice}
          </div>

          {/* Quantity Selector */}
          {isInCart && (
            <div className="w-full md:w-auto flex justify-center">
              <QuantitySelector
                pizzaId={pizza.id}
                currentQuantity={currentQuantity}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="w-full md:w-auto">
            {!soldOut && !isInCart && (
              <button
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition-all"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
            {isInCart && <DeleteItem pizzaId={pizza.id} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerDetails;
