import logo from "/png-zwiggy-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-100 p-2 shadow-2xl shadow-gray-300 drop-shadow-sm">
      <header className="mx-full">
        <div className="mx-auto flex items-center justify-between w-[92%]">
          <Link to={"/"}>
            <img className="w-24" src={logo} />
          </Link>
          <ul className="mr-2 flex p-4">
            <Link to={"/"}>
              <li className="px-2 font-medium">Home</li>
            </Link>
            <Link to={"/about"}>
              <li className="px-2 font-medium">About</li>
            </Link>
            <Link to={"/contact"}>
              <li className="px-2 font-medium">Contact</li>
            </Link>
            <Link to={"/cart"}>
              <li className="flex px-2 font-medium"> Cart (0)</li>
            </Link>
            <li className="cursor-pointer px-2 font-medium">Login</li>
            <li className="cursor-pointer px-1 font-medium">🟢 | 🔴</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
