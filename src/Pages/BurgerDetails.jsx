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
    // <div className="flex justify-center items-center min-h-screen bg-gray-100">
    //   <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
    //     <img
    //       src={pizza.imageUrl}
    //       alt={pizza.name}
    //       className="w-full h-64 object-cover"
    //     />
    //     <div className="p-4">
    //       <h2 className="text-2xl font-bold text-gray-800">{pizza.name}</h2>
    //       <p className="mt-2 text-gray-600">
    //         <strong>Ingredients:</strong> {pizza.ingredients.join(", ")}
    //       </p>
    //       <p className="mt-2 text-gray-600">
    //         <strong>Price:</strong> ${pizza.unitPrice}
    //       </p>
    //       {pizza.soldOut && (
    //         <p className="mt-2 text-red-500 font-bold">Sold Out</p>
    //       )}
    //       <button
    //         className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
    //         onClick={() => alert("Added to cart!")}
    //       >
    //         Add to Cart
    //       </button>
    //       <button
    //         className="mt-2 w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-all"
    //         onClick={() => window.history.back()}
    //       >
    //         Back to Menu
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div class="w-full px-28 h-screen flex flex-col md:flex-row mt-16">
      {/* <!-- Първи контейнер (35% от ширината) --> */}
      <div class="w-full md:w-2/5 flex flex-col">
        <div class="flex-1 flex justify-center items-center ">
          <div class="text-center border-solid border-2 drop-shadow-2xl relative bg-white  px-12 py-12 rounded-lg">
            <div className="text-3xl px-2 absolute text-center bottom-28 bg-lime-500 left-24 border-solid border-2 rounded-lg border-indigo-600">
              <strong>Ingredients:</strong>
            </div>
            <p class="text-2xl text-center">{pizza.ingredients.join(", ")}</p>
          </div>
        </div>
        <div class="flex-1 ">Div 2</div>
      </div>

      {/* <!-- Втори контейнер (65% от ширината) --> */}
      <div class="w-full md:w-3/5 flex flex-col">
        <div class="flex-1 h-2/3 p-10 flex items-center justify-center">
          <img
            src={pizza.imageUrl}
            alt={pizza.name}
            class="w-full h-full object-cover"
          />
        </div>

        <div class="flex-1">
          <div className="flex flex-col text-center ">
            <h2 className="text-5xl font-bold">{pizza.name}</h2>
            <h2 className="text-3xl font-bold">390 г</h2>
          </div>
        </div>
        <div class="flex-1 flex justify-around align-center">
          <div className="inline-block align-middle text-3xl">
            <strong>Price:</strong> ${pizza.unitPrice}
          </div>
          <div className="align-middle font-bold">KOLICHESTVO:</div>
          <div className="align-middle">
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
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
