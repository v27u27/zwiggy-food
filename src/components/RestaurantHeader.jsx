import { restaurantImageCDNUrl } from "../utils/constants.js";
import RestaurantItems from "./RestaurantItems.jsx";
import { useState } from "react";

const RestaurantHeader = (props) => {
  const { resData, resMenuList } = props;
  const [showIndex, setShowIndex] = useState(0);
  // console.log(resMenuList);
  const filteredMenuList = resMenuList.filter(
    (res) =>
      res?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );
  // console.log(resData);
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-8">
          <div className="flex py-8">
            <div className="flex h-48 w-64 items-center justify-center overflow-hidden rounded-lg border-2 shadow-lg">
              <img
                className="h-auto w-full object-cover object-center"
                src={restaurantImageCDNUrl + resData.cloudinaryImageId}
              />
            </div>
            <div className="flex flex-col justify-center px-6">
              <h1 className="pt-1 text-4xl font-bold">{resData?.name}</h1>
              <h2 className="mb-1 pt-1 text-gray-700">
                {resData?.cuisines.join(", ")}
              </h2>
              <div>
                <span className="mt-1 w-auto rounded-md bg-green-400 px-1 py-1">
                  ★ {resData?.avgRatingString}
                </span>
                <h4 className="mt-1 font-bold">
                  {resData?.sla?.lastMileTravelString}{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {resData?.costForTwoMessage}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>

      {filteredMenuList.map((resMenuCategory, index) => (
        <RestaurantItems
          key={resMenuCategory?.card?.card?.title}
          menuItemCards={resMenuCategory?.card?.card}
          setShowIndex={setShowIndex}
          showIndex={showIndex}
          index={index}
        />
      ))}
    </div>
  );
};
export default RestaurantHeader;
