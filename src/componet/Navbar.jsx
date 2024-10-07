import logo from "../assets/mintesinotLogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    return  <nav className=" mb-20 flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-16  h-auto"src={logo} alt="Mintesinot Logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaTwitterSquare />
            <FaInstagram />
        </div>
    </nav>
   
  
};

export default Navbar;