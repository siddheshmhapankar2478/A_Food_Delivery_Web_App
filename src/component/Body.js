import React from "react";
import RestroCard from "./RestroCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import NoSearchResult from "./NoSearchResult";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import SearchIcon from '@mui/icons-material/Search';
import { filterData } from "../config";
import { restaurantListMain } from "../config";


function handleSearch(setFiltererdRestroData,allRestroData,searchTxt) {
  const data = filterData(allRestroData, searchTxt);
  setFiltererdRestroData(data);
}
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestroData, setAllRestroData] = useState([]);
  const [filtererdRestroData, setFiltererdRestroData] = useState([]);
  const isOnline=useOnline();
  
  useEffect(() => {
    const restaurantList = restaurantListMain.map(item => {
    return item.info;
    });
    setAllRestroData(restaurantList);
  setFiltererdRestroData(restaurantList);

  }, []);
  // useEffect(() => {
  //   handleSearch(setFiltererdRestroData,allRestroData,searchTxt);
  // }, [searchTxt]);
  useEffect(()=>{
    console.log("filtererdRestroData");
    console.log(filtererdRestroData);
    console.log("filtererdRestroData");
  },[filtererdRestroData]);
  
  if(!isOnline)
      return <Offline/>

  return (allRestroData?.length) === 0 ? (
    <>
      <Shimmer />
    </>) : (
    <>
      <div className=" flex  mx-auto w-1/2 my-6 bg-white rounded-md shadow-md border border-slate-400 ">
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

      <div className=" flex flex-wrap w-[85%] mx-auto sm:justify-center mb-20">
        {filtererdRestroData?.length === 0 ? (
          <NoSearchResult />
        ) : (
          filtererdRestroData?.map((restro) => (
            <Link to={"/restaurant/"+restro?.id} key={restro?.id} >
            <RestroCard restro={restro} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default Body;
