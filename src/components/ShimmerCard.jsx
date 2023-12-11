const ShimmerCard = ()=> {
    return <div className="p-3 my-3 w-4/12 transform transition duration-200 hover:scale-95">
        <div className="w-auto rounded-lg shadow-xl shadow-gray-300 cursor-pointer">
            <div className="bg-gray-300 w-auto h-64 flex justify-center items-center overflow-hidden rounded-lg animate-pulse">
            </div>
        </div>
        <div className=" py-4">
            <div className="h-4 w-64 bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-4 w-36 mt-2 bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-4 w-52 mt-2 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
    </div>
}
export default ShimmerCard;
