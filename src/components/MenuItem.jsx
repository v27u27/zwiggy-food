import { restaurantImageCDNUrl } from "../utils/constants.js";
import zwiggyLogo from "/png-zwiggy-logo.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice.js";
import { useState } from "react";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    setAddedToCart(true);
  };
  return (
    <div>
      <div className="flex grid grid-cols-9 justify-between rounded-b-sm border-b-2 p-4 hover:bg-gray-200">
        <div className="col-span-6 p-2 font-medium">
          <div className="start-0">{item?.name}</div>
          <div>
            {"₹"}
            {item?.price ? item?.price / 100 : item?.defaultPrice / 100}
          </div>
          <div className="text-gray-500">{item?.description}</div>
        </div>
        <div className="relative col-span-3 m-auto flex h-36 w-48 items-center justify-center overflow-hidden rounded-lg">
          <img
            className="h-auto w-full object-cover object-center"
            src={
              item?.imageId ? restaurantImageCDNUrl + item?.imageId : zwiggyLogo
            }
          />
          {addedToCart ? (
            <button className="absolute bg-gray-400 bottom-0 border-2 border-gray-500 px-6 py-1 text-black">
              ADDED
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="absolute bottom-0 border-2 border-green-600 bg-white px-6 py-1 text-green-600 hover:bg-gray-100
            transition duration-300 ease-in-out transform hover:scale-105 active:bg-gray-700 active:scale-95"
            >
              ADD&nbsp;&nbsp;+
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
