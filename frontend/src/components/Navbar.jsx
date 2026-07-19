import { Link } from "react-router-dom";
import logo from "/e_con_systems_logo.jpeg";
function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b  ">
      <div className="max-w-7xl  px-6 h-16 flex items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="e-con Systems" className="h-10 w-auto" />

          <span className="text-md sm:text-xl font-bold text-[#2e4072] ">
            Product Management System
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
