import { restaurantImageCDNUrl } from "../utils/constants.js";
import zwiggyLogo from "/png-zwiggy-logo.png";

const CartItems = ({ item }) => {
  return (
    <div>
      <div className="mb-2 rounded-md bg-gray-50 p-2 shadow-md hover:bg-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative col-span-3 m-auto flex h-28 w-36 items-center justify-center overflow-hidden rounded-lg">
              <img
                className="h-auto w-full object-cover object-center"
                src={
                  item?.imageId
                    ? restaurantImageCDNUrl + item?.imageId
                    : zwiggyLogo
                }
              />
            </div>
            <div className="px-6">
              <h2 className="text-lg font-semibold">{item?.name}</h2>
              <p className="text-gray-500">
                {"₹"}
                {item.price ? item.price / 100 : item.defaultPrice / 100}
              </p>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-700 focus:outline-none">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
