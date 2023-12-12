const RestaurantMenuShimmer = () => {
  const n = 5;
  return (
    <div className="flex-1">
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-2"></div>
          <div className="col-span-8">
            <div className="flex py-8">
              <div className="flex h-48 w-64 animate-pulse items-center justify-center overflow-hidden rounded-lg bg-gray-300 shadow-lg"></div>
              <div className="flex flex-col justify-center px-5">
                <div className="h-4 w-44 animate-pulse rounded-md bg-gray-300 pt-1"></div>
                <div className="my-3 h-4 w-28 animate-pulse rounded-md bg-gray-300 pt-1"></div>
                <div className="h-4 w-12 animate-pulse rounded-md bg-gray-300 pt-1"></div>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>

      {[...Array(n)].map((e, i) => (
        <div key={i} className="mb-2 grid grid-cols-12">
          <div className="col-span-2"></div>
          <div className="col-span-8 w-full">
            <div className="mt-4 flex h-12 animate-pulse cursor-pointer justify-between rounded-md bg-gray-300 p-4 shadow-lg"></div>
          </div>
          <div className="col-span-2"></div>
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenuShimmer;
