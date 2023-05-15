import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [id, setId] = useState("");
  const [api, setApi] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${api}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          setId("");
          setApi("");
          navigate("/message");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Your Id or Api is Incorrect");
      });
  };

  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
        <label htmlFor="IdInstance">IdInstance</label>
        <input
          className="border focus:outline-none p-2"
          type="text"
          placeholder="Your IdInstance"
          id="IdInstance"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label htmlFor="ApiTokenInstance">ApiTokenInstance</label>
        <input
          className="border focus:outline-none p-2"
          type="text"
          placeholder="Your ApiTokenInstance"
          id="ApiTokenInstance"
          value={api}
          onChange={(e) => setApi(e.target.value)}
        />

        <button className="p-3 bg-[#00a884] text-white font-bold" type="submit">
          Log in to Message
        </button>
      </form>
    </div>
  );
};

export default LogIn;
