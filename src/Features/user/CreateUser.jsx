import React from "react";
import { useState } from "react";
import Button from "../../Components/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

 
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div className="flex mx-auto justify-center mt-3">
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
    );
    
   
    
}

export default CreateUser;
