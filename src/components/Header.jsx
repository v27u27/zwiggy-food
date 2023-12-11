import logo from '/png-zwiggy-logo.png'

const Header = () => {
    return <div className=" bg-gray-100 p-2 drop-shadow-sm shadow-gray-300 shadow-2xl">

        <header className="mx-full">
            <div className="mx-auto w-[92%] flex justify-between items-center ">
            <img className="w-24" src={logo}/>
            <ul className="flex p-4 mr-2">
                <li className="px-2 text-lg font-bold">Home</li>
                <li className="px-2 text-lg font-bold">About</li>
                <li className="px-2 text-lg font-bold">Contact</li>
                <li className="px-2 text-lg font-bold">Cart</li>
                <li className="px-2 text-lg font-bold">Login</li>
                <li className="px-2 text-lg font-bold">online</li>
            </ul>
            </div>
        </header>
    </div>
}

export default Header;
