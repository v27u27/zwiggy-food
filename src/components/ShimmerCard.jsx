const ShimmerCard = () => {
  return (
    <div className="my-3 w-4/12 transform p-3 transition duration-200 hover:scale-95">
      <div className="w-auto cursor-pointer rounded-lg shadow-xl shadow-gray-300">
        <div className="flex h-64 w-auto animate-pulse items-center justify-center overflow-hidden rounded-lg bg-gray-300"></div>
      </div>
      <div className="py-4">
        <div className="h-4 w-64 animate-pulse rounded-lg bg-gray-300"></div>
        <div className="mt-2 h-4 w-36 animate-pulse rounded-lg bg-gray-300"></div>
        <div className="mt-2 h-4 w-52 animate-pulse rounded-lg bg-gray-300"></div>
      </div>
    </div>
  );
};
export default ShimmerCard;
