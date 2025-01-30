import { Link } from "react-router-dom";

const Header = () => {
  return (
     <div className="  h-12 md:h-16 border-b">
    <div>
        <Link to="/" className="text-xl text-red-500 italic 
        cursor-pointer select-none">Logo</Link>
    </div>
    <div>
        
    </div>
    <div></div>
  </div>
 )
};

export default Header;
 