import { restaurantImageCDNUrl } from "../utils/constants.js";
import RestaurantItems from "./RestaurantItems.jsx";

const RestaurantHeader = (props) => {
  const { resData, resMenuList } = props;
  // console.log(resMenuList);
  // console.log(resData);
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-8">
          <div className="flex py-8">
            <div className="flex h-48 w-64 items-center justify-center overflow-hidden rounded-lg">
              <img
                className="h-auto w-full object-cover object-center"
                src={restaurantImageCDNUrl + resData.cloudinaryImageId}
              />
            </div>
            <div className="flex flex-col px-6 justify-center">
              <h1 className="text-4xl font-bold pt-1">{resData?.name}</h1>
              <h2 className="text-gray-700 pt-1 mb-1">
                {resData?.cuisines.join(", ")}
              </h2>
              <div>
                <span className="w-auto rounded-md bg-green-400 px-1 py-1 mt-1">
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
      {resMenuList.map((resMenuCategory) => (
        <RestaurantItems
          key={resMenuCategory?.card?.card?.title}
          category={resMenuCategory?.card?.card}
        />
      ))}
    </div>
  );
};
export default RestaurantHeader;
