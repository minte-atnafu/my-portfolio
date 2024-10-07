import logo from "../assets/mintesinotLogo.jpg";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-4">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-16 h-auto" src={logo} alt="Mintesinot Logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                {/* LinkedIn Link */} 
                <a href="https://www.linkedin.com/in/mintesinot-atnafu-056211311" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                {/* GitHub Link */}
                <a href="https://github.com/minte-atnafu" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                {/* Twitter Link */}
                <a href="https://twitter.com/@atnafu55161" target="_blank" rel="noopener noreferrer">
                    <FaTwitterSquare />
                </a>
                {/* Instagram Link */}
                <a href="https://www.instagram.com/mintesinotatnafu/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
