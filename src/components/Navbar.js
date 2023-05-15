import React from "react";
import Logo from "../assets/whatsapp.png";

const Navbar = () => {
  return (
    <div className="flex h-20 bg-[#00a884] items-center justify-center">
      <a className="w-full h-full" href="/">
        <img
          className="w-[50%] h-full object-contain"
          src={Logo}
          alt="whatsapp logo"
        />
      </a>
      <h3 className="w-[50%] text-[30px] font-bold text-white text-center">
        GREEN API
      </h3>
    </div>
  );
};

export default Navbar;
