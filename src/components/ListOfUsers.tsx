import React from "react";
import { Link } from "react-router-dom";

export type ListOfUsersProps = {
  data: {
    name: string;
    email: string;
    phone: number;
    id: number;
    address: string;
    img: string;
    title: string;
  }[];
};
const ListOfUser = ({ data }: ListOfUsersProps) => {
  return (
    <div className=" flex justify-center w-full">
      <ul className="grid md:grid-cols-3 w-full flex-wrap gap-3 sm:grid-cols-2 grid-cols-1 ">
        {data.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-around  flex-col  p-3  rounded-md  shadow-lg md:w-[183px] hover:border-[1px] "
            >
              <div className="flex">
                <img src={item.img} alt="users-image" width={30} height={30} />
                <div className=" text-[12px] font-serif  pl-3">
                  <p className="">{item.name}</p>
                  <p className="">{item.title}</p>
                </div>
              </div>
              <Link to={`users/${item.id}`} className="flex justify-center">
                <button className="mt-2   text-slate-700   hover:text-white  text-[14px]">
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

export default ListOfUser;
