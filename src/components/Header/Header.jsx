
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { Tooltip } from "@chakra-ui/react";



const Header = () => {
  return (
    <div
      className="  h-12 md:h-16 border-b flex items-center
     justify-between px-4 md:px-8"
    >
      {/*  LOGO  */}
      <div>
        <Link
          to="/"
          className="text-xl  italic 
        cursor-pointer select-none"
        >
          Logo
        </Link>
      </div>

      {/*  SEARCH BAR  */}

      <Searchbar />

      {/*  CART AND LOGIN */}
      <div className="flex gap-x-4 items-center">
        <Link
          to="/login"
          className="text-sm md:text-base hover:bg-blue-500
               \"
        >
          Login
        </Link>

        <div
          className="
        flex gap-x-4 items-center"
        >
          <Link to="/cart" className="flex">
            <Tooltip label="Cart" aria-label="A tooltip">
              <ShoppingCart />
            </Tooltip>
            <span className="p-1 px-2 bg-red-200 text-xs rounded-full">1</span>
          </Link>

          <Link to="/wishlist">
            <Tooltip label="wishist" aria-label="A tooltip">
                <Heart />
            </Tooltip>
        
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
 