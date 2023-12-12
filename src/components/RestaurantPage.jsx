import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { restaurantMenuFetchApiUrl } from "../utils/constants.js";
import RestaurantHeader from "./RestaurantHeader.jsx";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer.jsx";

const RestaurantPage = () => {
  const { resId } = useParams();
  const [resMenuData, setResMenuData] = useState([]);
  useEffect(() => {
    //fetch API call to restaurant
    fetchRestaurantMenu();
  }, []);
  const fetchRestaurantMenu = async () => {
    const data = await fetch(restaurantMenuFetchApiUrl + resId);
    const json = await data.json();
    setResMenuData(json?.data?.cards);
  };
  if (resMenuData.length === 0) {
    return <RestaurantMenuShimmer />;
  }
  const resInfoData = resMenuData[0]?.card?.card?.info;
  const resMenuList =
    resMenuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1, -2);
  return (
    <div className="flex-1">
      <RestaurantHeader resData={resInfoData} resMenuList={resMenuList} />
    </div>
  );
};
export default RestaurantPage;
