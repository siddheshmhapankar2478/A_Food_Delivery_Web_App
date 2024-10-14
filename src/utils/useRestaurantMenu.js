import { useState,useEffect } from "react";
import { MENU_CDN_URL } from "../config";
import { RESTAURANT_MENU_URL } from "../config";

const useRestaurantMenu=(resId)=>{
    const [restroMenu,setRestroMenu]=useState([]);
    const [restroInfo,setRestroInfo]=useState([]);
    async function getRestroMenu(){
      // const data=await fetch(MENU_CDN_URL+id+"&submitAction=ENTER");
      const data = await fetch(RESTAURANT_MENU_URL + resId);
      const json=await data.json();
      console.log({
        "json?.data": json?.data,
        "json?.data?.cards[0]": json?.data?.cards[0],
        "json?.data?.cards[2]?.card?.card": json?.data?.cards[0]?.card?.card,
        // "json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards":
        //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
      });
      setRestroMenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
      setRestroInfo(json?.data?.cards[2]?.card?.card);
    }
    useEffect(()=>{
      getRestroMenu()
    },[]);
    return {restroInfo,restroMenu};
}
export default useRestaurantMenu;