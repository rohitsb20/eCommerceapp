import { Input } from "@chakra-ui/react";
import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="full  ">
      <form>
        <div className="flex gap-x-1 items-center">
          <Input variant="outline" placeholder="Search products..." size="sm" />
          <div
            className=" bg-gray-200 hover:bg-gray-300 p-2 flex items-center
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
