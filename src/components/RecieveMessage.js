import React, { useEffect } from "react";
import axios from "axios";

const RecieveMessage = () => {
  const id = localStorage.getItem("userId");
  const api = localStorage.getItem("userApi");

  const fetchData = async () => {
    const url = `https://api.green-api.com/waInstance${id}/ReceiveNotification/${api}`;

    try {
      const response = await axios.get(url);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <li>waiting for answer...</li>
      </ul>
    </div>
  );
};

export default RecieveMessage;
