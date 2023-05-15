import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RecieveMessage from "../components/RecieveMessage";


const Message = () => {
  const [chatId, setChatId] = useState("");
  const [message, setMessage] = useState("");

  const id = localStorage.getItem("userId");
  const api = localStorage.getItem("userApi");

  const messages = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.green-api.com/waInstance${id}/sendMessage/${api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatId: chatId,
        message: message,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        // Handle the response data
        setChatId("");
        setMessage("");
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors

        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <form
        className="flex flex-col w-[50%] m-auto items-center justify-center gap-[20px] mt-[50px]"
        onSubmit={handleSubmit}
      >
        <label htmlFor="num">Type Phone number</label>
        <input
          type="text"
          id="num"
          value={chatId}
          onChange={(e) => setChatId(e.target.value)}
          placeholder="phone number"
          className="focus:outline-none p-2 border"
        />

        <label htmlFor="message">Type text Message</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send message"
          className="focus:outline-none p-5 border"
        />
        <button type="submit" className="p-3 bg-[#00a884] text-white font-bold">
          Send Message
        </button>
      </form>
      <RecieveMessage/>
    </div>
  );
};

export default Message;
