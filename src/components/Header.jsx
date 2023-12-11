import logo from '/png-zwiggy-logo.png'

const Header = () => {
    return <div>

        <header className="mx-full p-4 flex justify-between items-center shadow-gray-300 shadow-md bg-gray-100">
            <img className="w-24" src={logo}/>
            <ul className="flex p-4">
                <li className="px-2 text-lg">Home</li>
                <li className="px-2 text-lg">About</li>
                <li className="px-2 text-lg">Contact</li>
                <li className="px-2 text-lg">Cart</li>
                <li className="px-2 text-lg">Login</li>
                <li className="px-2 text-lg">online</li>
            </ul>
        </header>
    </div>
}

export default Header;
