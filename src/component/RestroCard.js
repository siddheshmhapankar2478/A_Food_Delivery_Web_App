import React from 'react'
import { CARD_IMG_URL } from '../config';
import StarIcon from '@mui/icons-material/Star';

const RestroCard = ({restro}) => {
  const {name,cloudinaryImageId,cuisines,sla,avgRating,costForTwo}=restro;
  return (
    <>
      <div className="w-60 m-2 p-2 pb-4 rounded-lg shadow-lg hover:border border-slate-400 ">
        {!cloudinaryImageId || cloudinaryImageId === "404" ? (
          <div className="animate-pulse w-56 h-36 rounded-lg bg-gray-400"></div>
        ) : (
          <img
            className="w-60 h-32  object-cover rounded-lg bg-green-200"
            src={CARD_IMG_URL + cloudinaryImageId}
            alt="Restro image"
          ></img>
        )}

        <h3 className="font-bold text-xl px-2 py-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {name}
        </h3>
        <h3 className="px-2 py-1 text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
          {cuisines.join(", ")}
        </h3>
        <div className="flex py-1">
          <h3 className="font-bold text-base px-2 py-1">{sla?.slaString}</h3>
          <div className="bg-green-400 w-fit mx-1 flex">
            <h3 className="font-bold text-base pl-1 py-1 text-white">
              {avgRating}{" "}
            </h3>
            <h3 className="font-bold text-base pr-1 text-white">
              <StarIcon></StarIcon>
            </h3>
          </div>
        </div>
        <h3 className="font-bold text-base px-2">{costForTwo}</h3>
      </div>
    </>
  );
}

export default RestroCard