const RestaurantCard = (props) => {

    const {resData} = props
    const {name, cloudinaryImageId, costForTwo, avgRatingString, sla, cuisines} = resData

    return <div className="p-3 my-3 w-80 transform transition duration-200 hover:scale-95">
        <div className="w-auto rounded-lg shadow-xl shadow-gray-300 cursor-pointer">
            <div className="w-auto h-48 flex justify-center items-center overflow-hidden rounded-lg">
                <img className="w-full h-auto object-center object-cover"
                     src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            </div>
        </div>
        <div className="px-2 py-4">
            <h3 className="font-bold text-lg">{name}</h3>
            <div className="flex justify-between text-gray-700">
                <span className="bg-green-400 w-auto px-1 rounded-md">★ {avgRatingString}</span>
                {/*<span className="text-xs"> ● </span>*/}
                <span>{sla.lastMileTravelString}</span>
                <span>{costForTwo}</span>
            </div>
            <h4>{cuisines.join(', ')}</h4>
        </div>
    </div>
}

export default RestaurantCard;
