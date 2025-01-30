import { Input } from "@chakra-ui/react";
import { div } from "framer-motion/client";
import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="w-1/2 md:w-1/3 ">
      <form>
        <div className="flex gap-x-1 items-center">
          <Input variant="outline" placeholder="Search products..." size="sm" />
          <div
            className=" bg-blue-300 hover:bg-blue-400 p-2 flex items-center
        rounded-full justify-center"
          >
            <button type="submit">
              <Search size={20} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
