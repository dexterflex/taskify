import { useState } from "react";

import { RiMenu3Fill } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";

const Menu = ({ myStyle, setOpenNav }) => {
    return (
        <ul className={myStyle}>
            <RiMenu4Line onClick={() => setOpenNav(false)} size={20} color="red" className="md:hidden" />
            <a href="#" className="hover:text-purple-500"><li>Home</li></a>
            <a href="#todo" className="hover:text-purple-500"><li>todo</li></a>
            <a href="#review" className="hover:text-purple-500"><li>Reviews </li></a>
            <a href="#faq" className="hover:text-purple-500"><li>FAQ</li></a>
            <a href="#contact" className="hover:text-purple-500"><li>Contact</li></a>
        </ul>
    )
}
const Header = () => {
    const [openNav, setOpenNav] = useState(false)



    return (
        <div>
            {/* nav  */}
            <marquee behavior="left" direction="" className="text-sm py-2 text-red-600 md:hidden ">
                Mobile View Affect Animations &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Mobile View Affect Animations
            </marquee>
            <nav className="h-20 md:px-14 px-5 flex  items-center justify-between border">
                {/* logo  */}
                <a href="#"><h1 className="text-3xl text-purple-500 font-bold">taskify</h1></a>
                {/* options  */}
                <Menu myStyle="options text-black md:flex hidden items-center justify-center gap-5" />
                <div className="flex md:hidden">
                    {
                        !openNav && <RiMenu3Fill onClick={() => setOpenNav(true)} size={20} />
                    }
                    {
                        openNav &&
                        <Menu myStyle="options absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-3 z-10 bg-green-500 text-white scale-up-hor-right"
                            setOpenNav={setOpenNav} />
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;
