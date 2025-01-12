import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import logo from "../../../assets/logo.png"
import "../Navbar/Navbar.css"


const Navbar = () => {

    const navInfo = <>
    <li className="font-bold uppercase text-1xl"><Link to="/">Home</Link></li>
    <li className="font-bold uppercase text-1xl"><Link to="about">About</Link></li>
    <li className="font-bold uppercase text-1xl"><Link to="appointment">Appointment</Link></li>
    <li className="font-bold uppercase text-1xl"><Link to="login">Login</Link></li>

    </>
    return (
        <div className="bg-[#07332f]">
            <Container>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="text-white"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow ">
       
        {navInfo}
      </ul>
    </div>
    <a className="text-xl">
        <img src={logo} alt="logo" />
    </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {navInfo}
    </ul>
  </div>

</div>
            </Container>
        </div>
    );
};

export default Navbar;