import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import ListOfUser from "../components/ListOfUsers";
import useFetch from "../components/UsefetchUsers";
import Loading from "../components/Loading";

const Home = () => {
  const { data, errorMessage } = useFetch("http://localhost:8000/users");

  return (
    <>
      {errorMessage ? (
        <p className=" m-20 text-[30px]  font-serif   "> failed to fetch </p>
      ) : (
        <div className="flex justify-center  w-full  md:items-center  lg:w-[85%] md:h-[70vh]  bg-slate-600 m-3 rounded-md p-5">
          <div className="flex flex-col w-[78%] ">
            <h2 className="  font-bold font-sans pl-2">Users</h2>
            <div className="flex  justify-center  mt-5 mb-5 w-full">
              <div className="md:w-[99%] flex justify-between w-[80%] ">
                <div className="flex items-center border-2 p-[2px] rounded-md justify-center">
                  <CiSearch className="text-[15px] mt-2" />
                  <input
                    type="text"
                    placeholder="search"
                    className="border-0  focus:outline-none bg-transparent"
                  />
                </div>
                <div className="md:flex text-white justify-evenly  text-sm font-bold w-[36%]  hidden ">
                  <p className="  pl-2 pr-2">Reputation</p>
                  <p className="   bg-blue-600  rounded-sm  p-1 ">New users</p>
                  <p className="  pl-2 pr-2"> Moderators</p>
                </div>
              </div>
            </div>
            {data && <ListOfUser data={data} />}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
