import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../menu/menuSlice";
import { Link } from "react-router-dom";

function Menu() {
  const dispatch = useDispatch();
  const { items: menu, loading, error } = useSelector((state) => state.menu);

//   {"id":18,"name":"Tofu and Mushroom","unitPrice":15,"imageUrl":"https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-18.jpg","ingredients":["marinara","mozzarella","tofu","mushrooms","bell peppers"],"soldOut":false}]}

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
    <div className="bg-paper-bg p-16">
      {/* Заглавие на менюто */}
      <div className="text-center md:pt-10 pb-5 sm:pb-0">
        <h1 className="text-7xl font-bold text-gray-800">Burgers</h1>
      </div>
  
      {/* Мрежа с елементите на менюто */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 sm:p-24">
        {menu.map((pizza) => (
          <div
            key={pizza.id}
            className="bg-gray-100 p-2 overflow-hidden cursor-pointer"
          >
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-[250px] overflow-hidden mx-auto">
                <img
                  src={pizza.imageUrl}
                  alt={pizza.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">{pizza.name}</h3>
                <p>{pizza.ingredients.join(", ")}</p>
                <h4 className="text-xl text-gray-800 font-bold mt-3">
                  {pizza.unitPrice}$
                </h4>
              </div>
              {pizza.soldOut ? (
                <p className="text-red-500 text-2xl font-bold">Sold Out</p>
              ) : (
                <Link
                  to={`/menu/${pizza.id}`}
                  className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  View Details
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Menu;
