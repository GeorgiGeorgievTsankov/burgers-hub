import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../menu/menuSlice";
import { Link } from "react-router-dom";

function Menu() {
  const dispatch = useDispatch();
  const { items: menu, loading, error } = useSelector((state) => state.menu);

  

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (loading) {
    return <div>Loading menu...</div>;
  }

  if (error) {
    return <div>Error loading menu: {error}</div>;
  }

  return (
    <>
      <h1 className="text-7xl justify-center text-center mt-20 ">PIZZA MENU</h1>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
        {menu.map((pizza) => (
          <li
            key={pizza.id}
            className="sm:mt-2 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src={pizza.imageUrl}
              alt={pizza.name}
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {pizza.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              {pizza.ingredients.join(", ")}
            </p>
            <p className="text-gray-800 font-semibold text-lg mb-4">
              {pizza.unitPrice}$
            </p>
            {pizza.soldOut ? (
              <p className="text-red-500 text-sm font-bold">Sold Out</p>
            ) : (
              <Link
                to={`/menu/${pizza.id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                // onClick={() => alert(`Viewing details for ${pizza.name}`)}
              >
                View Details
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
