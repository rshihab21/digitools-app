import digiLogo from "../../assets/DigiTools.png"
import Links from "./Links"
import shoppingimg from "../../assets/products/shopping-cart.png"
const Navbar = () => {

    const menu = [
        {
            "id": 1,
            "pathname": "Products",
            "path": "/products"
        },
        {
            "id": 2,
            "pathname": "Features",
            "path": "/features"
        },
        {
            "id": 3,
            "pathname": "Pricing",
            "path": "/pricing"
        },
        {
            "id": 4,
            "pathname": "Testimonials",
            "path": "/testimonials"
        },
        {
            "id": 5,
            "pathname": "FAQ",
            "path": "/faq"
        }
    ]
    const navMenu=menu.map(nav=> <Links key={nav.id} nav={nav}></Links>)
   
    return (
        <div className="navbar bg-base-100 container mx-auto my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navMenu}
                    </ul>
                </div>
                <a className="text-xl cursor-pointer"><img src={digiLogo} alt="digilogo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <img src={shoppingimg} alt="" />
                <a className="cursor-pointer">Login</a>
                <button className="btn btn-primary rounded-full">Get Started</button>
            </div>
        </div>
    )
}

export default Navbar