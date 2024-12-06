import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Review from "../Components/Review";

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
    <div className="bg-paper-bg bg-center bg-cover h-auto w-full justify-around px-28 h-screen flex flex-col md:flex-row pt-16">
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
              <span className="text-xl text-gray-800">
              Classic Sesame Bun
              </span>
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
      <div className="w-full md:w-3/5 flex flex-col">
        <div className="flex-1 h-2/3 p-10 flex items-center justify-center">
          <img
            src={pizza.imageUrl}
            alt={pizza.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div class="flex-1 text-gray-800">
          <div className="flex flex-col text-center ">
            <h2 className="text-5xl font-bold p-2">{pizza.name}</h2>
            <h2 className="text-3xl font-bold">390 г</h2>
          </div>
        </div>
        <div className="text-gray-800 flex-1 flex justify-around align-center">
          <div className="inline-block align-middle text-3xl">
            <strong>Price:</strong> ${pizza.unitPrice}
          </div>
          <div className="align-middle font-bold">
            <div class="flex divide-x border w-max rounded-lg overflow-hidden">
              <button
                type="button"
                class="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base"
              >
                1
              </button>
              <button
                type="button"
                class="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 fill-current"
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
          <div className="align-middle">
            <button
              className="w-full px-2 bg-gray-800 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
              onClick={() => alert("Added to cart!")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerDetails;
