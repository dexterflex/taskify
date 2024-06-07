
import AnchorLink from "react-anchor-link-smooth-scroll";

import logo from "../assets/images/Logo maker project.jpeg";

const Header = () => {




    return (
        <div>
            {/* nav  */}
            <marquee behavior="left" direction="" className="text-sm py-2 text-red-600 md:hidden ">
                Mobile View Affect Animations &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Mobile View Affect Animations
            </marquee>
            <nav className="h-20 md:px-14 px-5 sm:flex items-center justify-between shadow-md bg-white">
                {/* logo  */}
                <AnchorLink href="#"><h1 className="text-3xl text-purple-500 font-bold">taskify</h1></AnchorLink>
                {/* options  */}
                <ul className="options text- flex items-center justify-center gap-5">
                    <AnchorLink href="#hero"><li>Home</li></AnchorLink>
                    <AnchorLink href="#todo"><li>todo</li></AnchorLink>
                    <AnchorLink href="#review"><li>Reviews </li></AnchorLink>
                    <AnchorLink href="#faq"><li>FAQ</li></AnchorLink>
                    <AnchorLink href="#contact"><li>Contact</li></AnchorLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
