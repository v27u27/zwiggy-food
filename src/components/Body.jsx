import RestaurantCard from "./RestaurantCard.jsx";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer.jsx";
import {defaultData} from "../utils/constants.js";

const Body = () => {

    const [resList, setResList] = useState([]);
    const [filterResList, setFilterResList] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [filterFlag, setFilterFlag] = useState(false)

    useEffect(() => {
        setResList(defaultData)
        setFilterResList(defaultData)
        // fetchResData();
    }, [])
    const fetchResData = async () => {
        const resData = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.548202&lng=77.2380163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await resData.json()
        const resArray = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        const resArrayConcated = resArray.length === 0 ? resArray : resArray.concat(defaultData)
        setResList(resArrayConcated)
        setFilterResList(resArrayConcated)
        // console.log(resArray)
    }

    const filterTopRestaurant = () => {
        if (filterFlag === true) {
            setFilterResList(resList)
            setFilterFlag(false)
        } else {
            setFilterResList(resList.filter(res => res?.info?.avgRating > 4))
            setFilterFlag(true)
        }
    }

    return <div className="bg-gray-100">
        <div className="pt-4 w-10/12 mx-auto">
            <div className="flex my-8">
                <div>
                    <button type="button" onClick={filterTopRestaurant}
                            className="bg-green-200 py-2 px-4 ml-3 rounded-md hover:bg-green-300">
                        {filterFlag ? "Remove Filter" : "Filter Top Rated"}
                    </button>
                </div>
                <div>
                    <input type="text" value={searchText} placeholder="Type Here to Search"
                           onChange={(e) => {
                               setSearchText(e.target.value)
                               setFilterResList(resList.filter(res => res.info.name.toLowerCase().includes(e.target.value.toLowerCase())))
                           }}
                           className="w-80 py-2 pl-2 ml-10 focus:outline-none border-gray-300 border-y-2 border-l-2 rounded-l-md"/>
                    <button type="button"
                            className="w-auto pr-2 py-2 bg-white border-gray-300 border-y-2 border-r-2 rounded-r-md">🔍
                    </button>
                </div>
            </div>

            <div className="flex-wrap flex">
                {resList.length === 0 ? <Shimmer/> : filterResList.map(res => <RestaurantCard key={res?.info?.id}
                                                                                              resData={res?.info}/>)}
            </div>
        </div>
    </div>
}

export default Body;
