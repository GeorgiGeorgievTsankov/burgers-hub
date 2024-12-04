import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BurgerDetails() {
  const { pizzaId } = useParams();
  const menu = useSelector((state) => state.menu?.items);

  if (!menu || menu.length === 0) {
    return <p>Loading menu data...</p>;
  }

  const pizza = menu.find((b) => b.id === Number(pizzaId));

  if (!pizza) {
    return <p>Pizza not found!</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <img 
          src={pizza.imageUrl} 
          alt={pizza.name} 
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">{pizza.name}</h2>
          <p className="mt-2 text-gray-600">
            <strong>Ingredients:</strong> {pizza.ingredients.join(", ")}
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Price:</strong> ${pizza.unitPrice}
          </p>
          {pizza.soldOut && (
            <p className="mt-2 text-red-500 font-bold">Sold Out</p>
          )}
          <button 
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
            onClick={() => alert("Added to cart!")}
          >
            Add to Cart
          </button>
          <button 
            className="mt-2 w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-all"
            onClick={() => window.history.back()}
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default BurgerDetails;

