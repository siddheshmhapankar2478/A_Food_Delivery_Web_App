import RestroCard from "./RestroCard";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import NoSearchResult from "./NoSearchResult";
import { Link } from "react-router-dom";
import { CDN_URL } from "../config";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import SearchIcon from '@mui/icons-material/Search';
import { filterData } from "../config";
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestroData, setallRestroData] = useState([]);
  const [filtererdRestroData, setFiltererdRestroData] = useState([]);
  const isOnline=useOnline();

  useEffect(() => {
    getRestaurant();
  }, []);
  useEffect(() => {
    handleSearch();
  }, [searchTxt]);

  async function getRestaurant() {
    const data = await fetch(CDN_URL);
    const json = await data.json();
    setallRestroData(json?.data?.cards[2]?.data?.data?.cards);
    setFiltererdRestroData(json?.data?.cards[2]?.data?.data?.cards);
  }
  function handleSearch() {
    const data = filterData(allRestroData, searchTxt);
    setFiltererdRestroData(data);
  }
  if(!isOnline)
      return <Offline/>

  return allRestroData?.length === 0 ? (
    <>
      <Shimmer />
    </>) : (
    <>
      <div className=" flex mx-auto w-1/2 my-6 bg-white rounded-md shadow-md border border-slate-400 ">
          <span className='px-2 pt-3'><SearchIcon></SearchIcon></span>
          <input
            className=" w-full h-12 py-2 mr-1 focus:outline-0 text-black"
            placeholder={"Search Restaurant"}
            type="search"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          ></input>
      </div>

      <div className="flex flex-wrap mx-28 sm:justify-center ">
        {filtererdRestroData?.length === 0 ? (
          <NoSearchResult />
        ) : (
          filtererdRestroData?.map((restro) => (
            <Link to={"/restaurant/"+restro?.data?.id} key={restro?.data?.id} >
            <RestroCard restro={restro?.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
