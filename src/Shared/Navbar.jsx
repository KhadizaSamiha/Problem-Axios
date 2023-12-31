import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import logo from "../assets/logo/White logo.png";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const navItem = <>
    <li><Link to='/'>Home</Link></li>

    <li><Link to='/about'>About</Link></li>

    {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
    
    <li><Link to='/alluser'>All User</Link></li>

    <li><Link to='/blog'>Blog</Link></li>

    <li><Link to='/plans'>Plans</Link></li>



  </>

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-[#FF725E]">
      <div className="navbar  text-white w-[84%] mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navItem}
            </ul>
          </div>
          <div className="">
            <Link to="/" className="">
              <img className="w-40 " src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 items-center">
              <div className="navbar-end me-3">
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm text-red-600 rounded-s-full rounded-b-full text-xs "
                >
                  Logout
                </button>
              </div>
              <div className="avatar online">
                <div className="w-11 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <Link to="signup/step-1">
                <p className="  text-white p-1 px-2 text-base lg:text-base  font-semibold rounded-xl outline outline-offset-2 outline-4 outline-White hover:outline-[#bc1828]">
                  Join Now
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
