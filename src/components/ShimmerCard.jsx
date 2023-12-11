const ShimmerCard = ()=> {
    return <div className="p-3 my-3 w-80 transform transition duration-200 hover:scale-95">
        <div className="w-auto rounded-lg shadow-xl shadow-gray-300 cursor-pointer">
            <div className="bg-gray-300 w-auto h-48 flex justify-center items-center overflow-hidden rounded-lg animate-pulse">
            </div>
        </div>
        <div className=" py-4">
            <div className="h-4 w-56 bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-4 w-32 mt-2 bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-4 w-44 mt-2 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
    </div>
}
export default ShimmerCard;
