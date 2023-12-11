import logo from '/png-zwiggy-logo.png'
import {Link} from "react-router-dom";

const Header = () => {
    return <div className=" bg-gray-100 p-2 drop-shadow-sm shadow-gray-300 shadow-2xl">

        <header className="mx-full">
            <div className="mx-auto w-[92%] flex justify-between items-center ">
                <Link to={'/'}><img className="w-24" src={logo}/></Link>
                <ul className="flex p-4 mr-2">
                    <Link to={'/'}>
                        <li className="px-2 text-lg font-bold">Home</li>
                    </Link>
                    <Link to={'/about'}>
                        <li className="px-2 text-lg font-bold">About</li>
                    </Link>
                    <Link to={'/contact'}>
                        <li className="px-2 text-lg font-bold">Contact</li>
                    </Link>
                    <Link to={'/cart'}>
                        <li className="px-2 text-lg font-bold">Cart</li>
                    </Link>
                    <li className="px-2 text-lg font-bold cursor-pointer">Login</li>
                    <li className="px-2 text-lg font-bold cursor-pointer">online</li>
                </ul>
            </div>
        </header>
    </div>
}

export default Header;
