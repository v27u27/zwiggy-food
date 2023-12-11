import RestaurantCard from "./RestaurantCard.jsx";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer.jsx";

const Body = () => {

    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetchResData();
    }, [])
    const fetchResData = async () => {
        const resData = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.548202&lng=77.2380163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await resData.json()
        const resArray = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResList(resArray)
        // console.log(resArray)
    }

    return <div className="mt-6 w-10/12 mx-auto">
        <div className="flex my-8">
            <div>
                <button type="button" className="bg-green-200 py-2 px-4 ml-3 rounded-md hover:bg-green-300">Filter
                    Top Rated
                </button>
            </div>
            <div>
                <input type="text" placeholder="Type Here"
                       className="w-auto p-2 ml-10 border-gray-300 border-y-2 border-l-2 rounded-l-md"/>
                <button type="button"
                        className="bg-orange-200 border-orange-200 border-2 py-2 px-4 rounded-r-md hover:bg-orange-300 hover:border-orange-300">Search
                    🔍
                </button>
            </div>
        </div>

        <div className="flex-wrap flex">
            {resList.length === 0 ? <Shimmer/> : resList.map(res => <RestaurantCard key={res?.info?.id}
                                                                                    resData={res?.info}/>)}
        </div>
    </div>
}

export default Body;
