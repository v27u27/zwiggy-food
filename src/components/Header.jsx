import logo from "/png-zwiggy-logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext.js";

const Header = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const handleLogout = () => {
    setUserName(null);
  };
  return (
    <div className="bg-white shadow-lg p-2 shadow-gray-300 drop-shadow-sm">
      <header className="mx-full">
        <div className="mx-auto flex items-center justify-between w-[92%]">
          <Link to={"/"}>
            <img className="w-24" src={logo} />
          </Link>
          <ul className="mr-2 flex p-4">
            {loggedInUser ? (
              <li className="px-2 font-medium">
                {" "}
                Welcome, {" " + loggedInUser}{" "}
              </li>
            ) : (
              ""
            )}
            <Link to={"/"}>
              <li className="px-2 font-medium">Home</li>
            </Link>
            <Link to={"/cart"}>
              <li className="flex px-2 font-medium"> Cart (0)</li>
            </Link>
            <div>
              {loggedInUser ? (
                <li
                  onClick={handleLogout}
                  className="cursor-pointer px-2 font-medium"
                >
                  Logout
                </li>
              ) : (
                <Link to={"/login"}>
                  <li className="cursor-pointer px-2 font-medium">Login</li>
                </Link>
              )}
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
