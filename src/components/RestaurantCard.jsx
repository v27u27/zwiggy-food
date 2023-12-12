import { restaurantImageCDNUrl } from "../utils/constants.js";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    id,
    cloudinaryImageId,
    costForTwo,
    avgRatingString,
    sla,
    cuisines,
    aggregatedDiscountInfoV3,
  } = resData;
  // "aggregatedDiscountInfoV3": {
  //     "header": "20% OFF",
  //         "subHeader": "UPTO ₹50"
  // },

  return (
    <div className="my-3 w-4/12 transform p-4 transition duration-200 hover:scale-95">
      <Link to={"/restaurant/" + id}>
        <div className="w-auto cursor-pointer rounded-lg shadow-2xl shadow-gray-400">
          <div className="flex h-64 w-auto items-center justify-center overflow-hidden rounded-lg">
            <img
              className="h-auto w-full object-cover object-center"
              src={restaurantImageCDNUrl + cloudinaryImageId}
            />
          </div>
        </div>
        <div className="px-2 py-4">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="flex justify-between text-gray-700">
            <span className="w-auto rounded-md bg-green-400 px-1">
              ★ {avgRatingString}
            </span>
            {/*<span className="text-xs"> ● </span>*/}
            <span>{sla.lastMileTravelString}</span>
            <span>{costForTwo}</span>
          </div>
          <h4>{cuisines.join(", ")}</h4>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
