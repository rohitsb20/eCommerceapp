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
    <div
      className=" p-2 flex  flex-col 
    md:flex-row md:justify-around 
     items-center justify-center rounded-lg"
    >
      <div className="text-xs md:text-sm font-medium flex items-center gap-x-1">
        <AlignRight /> <span>Shop by categories</span>
      </div>

      {/* LINKS  */}
      <div className="flex gap-x-4 items-center">
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
      <div>
        <Hamburger />
      </div>
    </div>
  );
}

export default Navbar