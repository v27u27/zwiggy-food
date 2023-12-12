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
    <div className="bg-white p-2 shadow-lg shadow-gray-300 drop-shadow-sm">
      <header className="mx-full">
        <div className="mx-auto flex items-center justify-between w-[92%]">
          <Link to={"/"}>
            <img className="w-24" src={logo} />
          </Link>
          <ul className="mr-2 flex p-4">
            {loggedInUser ? (
              <li className="mr-1 rounded-md bg-cyan-200 px-2 py-2 font-medium">
                {" "}
                Welcome, {" " + loggedInUser}{" "}
              </li>
            ) : (
              ""
            )}
            <Link to={"/"}>
              <li className="rounded-md px-2 py-2 font-medium hover:bg-gray-200">
                Home
              </li>
            </Link>
            <Link to={"/cart"}>
              <li className="flex rounded-md px-2 py-2 font-medium hover:bg-gray-200">
                {" "}
                Cart (0)
              </li>
            </Link>
            <div>
              {loggedInUser ? (
                <li
                  onClick={handleLogout}
                  className="cursor-pointer rounded-md px-2 py-2 font-medium hover:bg-red-200"
                >
                  Logout
                </li>
              ) : (
                <Link to={"/login"}>
                  <li className="cursor-pointer rounded-md px-2 py-2 font-medium hover:bg-blue-300">
                    Login
                  </li>
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
