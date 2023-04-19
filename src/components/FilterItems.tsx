import { randomBytes } from "crypto";
import { Link } from "react-router-dom";

import React from "react";

type filterProps = {
  searchItem:
    | {
        name: string;
        email: string;
        phone: number;
        id: number;
        address: string;
        img: string;
        title: string;
      }[]
    | undefined;
};
const FilterItems = ({ searchItem }: filterProps) => {
  return (
    <div>
      <ul className="grid md:grid-cols-3 w-full flex-wrap gap-3 sm:grid-cols-2 grid-cols-1 ">
        {searchItem?.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-around  flex-col  p-3  rounded-md  items-center  bg-white hover: shadow-xl  md:w-[183px] hover:border-[1px] "
            >
              <div className="flex">
                <img src={item.img} alt="users-image" width={30} height={30} />
                <div className=" text-[12px] font-serif  pl-3">
                  <p className="font-bold tex-[30px]">{item.name}</p>
                  <p className="">{item.title}</p>
                </div>
              </div>
              <Link
                to={`users/${item.id}`}
                className="flex justify-center items-start"
              >
                <button className="mt-2   text-slate-700 ml-3   text-[10px] p-[3px] border-[1px]  border-black  rounded">
                  view details
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterItems;
