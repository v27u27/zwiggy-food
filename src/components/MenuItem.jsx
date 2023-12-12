import { restaurantImageCDNUrl } from "../utils/constants.js";
import zwiggyLogo from "/png-zwiggy-logo.png";

const MenuItem = ({ item }) => {
  return (
    <div>
      <div className="flex grid  hover:bg-gray-200 grid-cols-9 justify-between rounded-b-sm border-b-2 p-4">
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
          <button className="absolute bottom-0 border-2 border-green-600 bg-white px-6 py-2 text-green-600 hover:bg-gray-100">
            ADD&nbsp;&nbsp;+
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
