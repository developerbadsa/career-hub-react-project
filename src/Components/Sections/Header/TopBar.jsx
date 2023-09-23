import { NavLink } from "react-router-dom";



const TopBar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className={({ isActive, isPending }) => isPending ? "text-white" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]" : ""} to="/">Statistics</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive, isPending }) => isPending ? "text-white" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]" : ""} to="/appliedJob">Applied Jobs</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive, isPending }) => isPending ? "text-white" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]" : ""} to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <span className="text-3xl font-extrabold ">CareerHub</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive, isPending }) => isPending ? "text-white" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]" : ""}
              to="/"
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "text-white" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]" : ""} to="/appliedJob">Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) => isPending ? "text-white" : isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]" : ""} to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn font-bold text-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          Start Applying
        </a>
      </div>
    </nav>
  );
};

export default TopBar;
