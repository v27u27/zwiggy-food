import RestaurantCard from "./RestaurantCard.jsx";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import { defaultData, restaurantListFetchApiUrl } from "../utils/constants.js";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterResList, setFilterResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterFlag, setFilterFlag] = useState(false);

  useEffect(() => {
    // setResList(defaultData);
    // setFilterResList(defaultData);
    fetchResData();
  }, []);
  const fetchResData = async () => {
    const resData = await fetch(restaurantListFetchApiUrl);
    const jsonData = await resData.json();
    const resArray =
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const resArrayConcated =
      resArray.length === 0 ? resArray : resArray.concat(defaultData);
    setResList(resArrayConcated);
    setFilterResList(resArrayConcated);
    // console.log(resArray)
  };

  const filterTopRestaurant = () => {
    if (filterFlag === true) {
      setFilterResList(resList);
      setFilterFlag(false);
    } else {
      setFilterResList(resList.filter((res) => res?.info?.avgRating > 4.2));
      setFilterFlag(true);
    }
  };

  return (
    <div className="flex-1 bg-gray-100">
      <div className="mx-auto w-10/12 pt-4">
        <div className="my-8 flex">
          <div>
            <button
              type="button"
              onClick={filterTopRestaurant}
              className="ml-3 rounded-md bg-green-200 px-4 py-2 hover:bg-green-300"
            >
              {filterFlag ? "Remove Filter" : "Filter Top Rated"}
            </button>
          </div>
          <div>
            <input
              type="text"
              value={searchText}
              placeholder="Search you favourite restaurant name"
              onChange={(e) => {
                setSearchText(e.target.value);
                setFilterResList(
                  resList.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase()),
                  ),
                );
              }}
              className="ml-10 w-80 rounded-l-md border-y-2 border-l-2 border-gray-300 py-2 pl-2 focus:outline-none"
            />
            <button
              type="button"
              className="w-auto rounded-r-md border-y-2 border-r-2 border-gray-300 bg-white py-2 pr-2"
            >
              🔍
            </button>
          </div>
        </div>

        <div className="flex flex-wrap">
          {resList.length === 0 ? (
            <Shimmer />
          ) : (
            filterResList.map((res) => (
              <RestaurantCard key={res?.info?.id} resData={res?.info} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
