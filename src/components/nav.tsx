import React from "react";
import img from "../asset/img.png";
import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="bg-slate-800 flex justify-between items-center w-full">
      <img src={img} alt="logo-img" width={50} height={50} />

      <div className="md:w-2/6 lg:w-2/6  lg:flex  ">
        <ul className="md:flex md:pr-4 font-bold text-white md:justify-around lg:justify-around w-full hidden cursor-pointer ">
          <li>Home</li>
          <li>About</li>
          <li>User</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
        <div className="md:hidden text-[30px]">
          <BiMenuAltRight className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
