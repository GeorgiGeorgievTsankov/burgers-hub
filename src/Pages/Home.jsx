

import React from "react";
import CreateUser from "../Features/user/CreateUser";

const Home = () => (
  <div className="min-h-screen bg-burger-bg bg-cover bg-center">
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 p-5">
      <h1 className="text-white text-6xl font-bold">Welcome to Burgers Hub!</h1>
      <p className="text-white text-3xl p-2">
        Please start by telling us your name:
      </p>
      <CreateUser />
    </div>
  </div>
);

export default Home;
