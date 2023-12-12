import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  const handleFindFoodCLick = () => {
    navigate("/");
  };
  return (
    <div className="flex-1 bg-gray-100">
      <div className="flex items-center justify-center mt-60">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-500 mb-4">Go find some food!</p>
          <button
            onClick={handleFindFoodCLick}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 active:bg-gray-700 active:scale-95"
          >
            Find Food
          </button>
        </div>
      </div>
    </div>
  );
};
export default EmptyCart;
