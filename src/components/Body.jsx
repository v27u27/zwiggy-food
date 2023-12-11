import RestaurantCard from "./RestaurantCard.jsx";
import {useEffect, useState} from "react";

const Body = () => {

    // const [resList, setResList] = useState([]);

    useEffect(()=>{
        fetchResData();
    }, [])
    const fetchResData = async ()=>{
        const resData =  await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.548202&lng=77.2380163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await resData.json()
        const resArray = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // setResList()
        console.log(resArray)
    }

    return <div className="mt-6 w-10/12 mx-auto">
        <div className="flex justify-between my-8">
            <div>
                <input type="text" placeholder="Type Here" className="p-2 mx-2 border-gray-300 border-2 rounded-md"/>
                <button type="button" className="bg-orange-300 py-2 px-4 rounded-md">Search 🔍</button>
            </div>
            <div>
                <button type="button" className="bg-green-200 py-2 px-4 ml-2 rounded-md">Filter Top Rated</button>
            </div>
        </div>
        <div className="px-2">
            <RestaurantCard></RestaurantCard>
        </div>
    </div>
}

export default Body;
