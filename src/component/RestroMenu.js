import React from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestroInformation from "./RestroInformation";
import RestroMenuCard from "./RestroMenuCard";
import { restaurantMenu } from "../config";

const RestroMenu = () => {
  const param = useParams();
  const { id } = param;
  const { restroInfo, restroMenu } = useRestaurantMenu(id);

  return restroInfo?.length === 0 || restroMenu?.length === 0 ? (
    <ShimmerMenu />
  ) : (
    <>
      <div className="">
        <RestroInformation restroInfo={restroInfo} />
        <RestroMenuCard restroMenu={restaurantMenu[id]} />
      </div>
    </>
  );
};

export default RestroMenu;
