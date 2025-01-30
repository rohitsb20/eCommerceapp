import { Link } from "react-router-dom";
import {AlignRight } from "lucide-react"
import Hamburger from "../Hamburger/Hamburger";

const NavLink = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "fashion",
    href: "/fashion",
  },
  {
    title: "New Arrivals",
    href: "/new-arrivals",
  },
    {
        title: "Brands",
        href: "/brands",
    },
    {
        title: "Contact",
        href: "/contact",
    }
];

const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-between  p-2 ">

      <div
        className=" p-2 flex  flex-col 
      md:flex-row md:justify-around 
      items-center justify-center rounded-lg w-[90%] md:w-full"
      >
        <div className="text-lg md:text-sm font-medium flex items-center gap-x-1">
          <AlignRight /> <span>Shop by categories</span>
        </div>

        {/* LINKS  */}
        <div className="hidden md:flex gap-x-4 items-center ">
          {NavLink.map((link) => (
              <Link
              className="
            text-xs md:text-sm 
                 font-medium
                 capitalize hover:scale-110 "
              key={link.title}
              to={link.href}
              >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="md:hidden w-[10%]">
        <Hamburger />
      </div>
                </div>
      
    </>
  );
}

 

export default Navbar