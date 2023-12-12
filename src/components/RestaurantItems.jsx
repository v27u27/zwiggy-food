const RestaurantItems = (props) => {
  const { title, itemCards } = props.category;
  // console.log(title);
  // console.log(itemCards);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2"></div>
      <div className="col-span-8 flex justify-between w-full p-4 border-b-2">
        <div className="">{title}</div>
        <div>⌄</div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};
export default RestaurantItems;
