import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import ListOfUser from "../components/ListOfUsers";
import useFetch from "../components/UsefetchUsers";
import Loading from "../components/Loading";
import FilterItems from "./../components/FilterItems";

const Home = () => {
  const { data, errorMessage } = useFetch("http://localhost:3000/users");
  const [searchItem, setSearchItem] = useState<
    | {
        name: string;
        email: string;
        phone: number;
        id: number;
        address: string;
        img: string;
        title: string;
      }[]
    | undefined
  >(undefined);
  const [search, setSearch] = useState(false);
  const handleSearch = (e: any) => {
    let searchValue = e.target.value;
    let firstValue = searchValue.charAt(0);
    firstValue = firstValue.toUpperCase();
    searchValue = searchValue.slice(1);
    searchValue = firstValue + searchValue;
    // console.log(firstValue, searchValue);

    const filterSearchItem = data?.filter((item) =>
      item.name.includes(searchValue)
    );
    if (filterSearchItem !== undefined) setSearchItem(filterSearchItem);

    console.log(searchItem);
    setSearch(true);
    return;
  };

  return (
    <>
      {errorMessage ? (
        <p className=" m-20 text-[30px]  font-serif   "> failed to fetch </p>
      ) : (
        <div className="flex justify-center  w-full  md:items-center  lg:w-[85%] md:h-[70vh]  bg-slate-600 m-3 rounded-md p-5">
          <div className="flex flex-col w-[78%] ">
            <h2 className="  font-bold font-sans pl-2 text-white">Users</h2>
            <div className="flex  justify-center  mt-5 mb-5 w-full">
              <div className="md:w-[99%] flex justify-between w-[100%] ">
                <div className="flex  items-center mt-4 border-2 p-[2px] rounded-md justify-around">
                  <CiSearch className="text-[15px] " />
                  <input
                    type="text"
                    // value={`${searchItem}`}
                    onChange={handleSearch}
                    placeholder="search"
                    className="border-0  focus:outline-none bg-transparent text-white text-[15px]"
                  />
                </div>
                <div className="md:flex text-white justify-evenly  text-sm font-bold w-[36%]  hidden ">
                  <p className="  pl-2 pr-2">Reputation</p>
                  <p className="">Users</p>
                  <p className="  pl-2 pr-2"> Moderators</p>
                </div>
              </div>
            </div>

            {search ? (
              <FilterItems searchItem={searchItem} />
            ) : (
              data && <ListOfUser data={data} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
