import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems.jsx";
import EmptyCart from "./EmptyCart.jsx";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatcher = useDispatch();
  const totalPrice = cartItems
    .map((item) => (item?.price ? item?.price : item?.defaultPrice) / 100)
    .reduce((a, b) => a + b, 0);

  const handleClearCart = () => {
    dispatcher(clearCart());
  };
  const handleCheckout = () => {
    alert(
      "We tried placing your order, lets see.\nTIP: DON'T WAIT FOR IT.\nMeanwhile try exploring the website some more.",
    );
    handleClearCart();
  };
  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="flex-1">
      (
      <div className="container mx-auto mt-8">
        <div className="mx-auto mb-4 flex justify-between">
          <h1 className="mb-4 text-2xl font-semibold">Your Cart</h1>
          <button
            onClick={handleClearCart}
            className="bg-gray-200 text-red-400 font-semibold px-4 py-2 rounded-md mr-4 hover:bg-gray-500 focus:outline-none
        transition duration-300 ease-in-out transform hover:scale-105 active:bg-gray-700 active:scale-95"
          >
            CLEAR CART
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
        <div className="mb-6 rounded-md bg-white p-4 shadow-md">
          <p className="mb-2 pt-2 text-lg font-semibold">
            Total Price: {totalPrice}
          </p>
        </div>

        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-500 focus:outline-none
        transition duration-300 ease-in-out transform hover:scale-105 active:bg-gray-700 active:scale-95"
        >
          Checkout
        </button>
      </div>
      )
    </div>
  );
};
export default Cart;
