import MenuItem from "./MenuItem.jsx";

const RestaurantItems = ({ showIndex, setShowIndex, menuItemCards, index }) => {
  const { title, itemCards } = menuItemCards;
  // console.log(title);
  // console.log(itemCards);
  const handleAccordionClick = () => {
    if (index === showIndex) {
      setShowIndex(null);
      return;
    }
    setShowIndex(index);
  };
  return (
    <div className="mb-2 grid grid-cols-12">
      <div className="col-span-2"></div>
      <div className="col-span-8 w-full">
        <div
          onClick={handleAccordionClick}
          className="flex cursor-pointer justify-between rounded-md border-b-2 bg-gray-50 p-4 shadow-lg hover:bg-gray-200"
        >
          <div className="font-bold text-md">
            {title} ({itemCards.length})
          </div>
          <div>⌄</div>`
        </div>
        <div className="px-1">
          <div className="rounded-b-lg bg-gray-100">
            {showIndex === index
              ? itemCards.map((item) => (
                  <MenuItem
                    key={item?.card?.info?.id}
                    item={item?.card?.info}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};
export default RestaurantItems;
