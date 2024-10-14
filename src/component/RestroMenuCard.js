import React from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import MenuNotFound from "./MenuNotFound";
import { CARD_IMG_URL } from "../config";

const RestroMenuCard = ({ restroMenu }) => {
  const dispatch = useDispatch();
  function handleAddItems(item) {
    dispatch(addItem(item));
  }

  return (
    <div>
      {restroMenu?.map((menu, index) => {
        const { title, items } = menu;

        return (
          <div key={index}>
            <div className="w-3/4 flex  mx-auto my-3 justify-between border border-black">
              <h1 className="text-3xl font-bold p-5">{title}</h1>
            </div>

            {!items
              ? null
              : items.map((item) => {
                  const { imageId, name, description, id, price } = item;

                  return (
                    <div
                      key={id}
                      className="w-3/4 flex  mx-auto my-1 justify-between shadow-md "
                    >
                      <div className="p-4 w-4/5">
                        <h1 className="text-xl font-bold p-1">{name}</h1>
                        <h1 className="font-bold p-1">₹{price / 100}</h1>
                        <h1 className="p-1">{description}</h1>
                        <button
                          className="border font-bold text-white bg-black p-2 border-black hover:bg-white hover:text-black rounded-sm"
                          onClick={() => {
                            handleAddItems(item);
                          }}
                        >
                          Add Item
                        </button>
                      </div>
                      <div className="flex  my-auto mx-4 w-40 h-24">
                        <img
                          className="w-48 h-24 rounded-lg object-cover"
                          src={CARD_IMG_URL + imageId}
                        />
                      </div>
                    </div>
                  );
                })}
          </div>
        );
      })}
      {/* {!isRendered ? <MenuNotFound /> : null} */}
    </div>
  );
};

export default RestroMenuCard;
