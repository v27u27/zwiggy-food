const RestaurantCard = () => {
    return <div className="w-72 transform transition duration-300 hover:scale-95">
        <div className="w-auto rounded-lg shadow-xl shadow-gray-300 cursor-pointer">
            <div className="w-auto h-48 flex justify-center items-center overflow-hidden rounded-lg">
                <img className="w-full h-auto object-center object-cover"
                     src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"/>
            </div>
        </div>
        <div className="px-2 py-4">
            <h3 className="font-bold text-lg">Burger King</h3>
            <div className="flex justify-between text-gray-700">
                <span className="bg-green-400 w-auto px-1 rounded-md">★ 4.0</span>
                {/*<span className="text-xs"> ● </span>*/}
                <span>2Km</span>
                <span>Rs 400 for Two</span>
            </div>
            <h4>Burger, fries</h4>
        </div>
    </div>
}

export default RestaurantCard;
