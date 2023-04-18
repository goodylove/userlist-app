import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../components/UserFectchUser";
import { BiArrowBack } from "react-icons/bi";

const UserDetails = () => {
  const { id } = useParams();
  const { data } = useFetch(" http://localhost:8000/users/" + id);

  return (
    <div className=" lg:w-[90%] flex justify-center w-full sm:w-full">
      <div className="flex relative  justify-center  w-full sm:w-full items-center  lg:w-[45%] h-[70vh]  bg-slate-600 m-3 rounded-md shadow-xl text-white">
        <Link to="/">
          <BiArrowBack className="absolute top-5 left-5 text-[20px]" />
        </Link>
        <div className="flex flex-col justify-center items-center">
          <img src={data?.img} alt="" className="pr-6" />
          <div className="text-[16px] font-serif flex flex-col justify-center">
            <span>
              <span className="p-2">Name:</span>
              {data?.name}
            </span>
            <span>
              <span className="p-2">Title:</span>
              {data?.title}
            </span>
            <span>
              <span className="p-2">Email:</span>
              {data?.email}
            </span>
            <span>
              <span className="p-2">Phone:</span>
              {data?.phone}
            </span>
            <span>
              <span className="p-2">Address:</span>
              {data?.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
