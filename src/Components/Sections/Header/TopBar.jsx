
import { NavLink } from "react-router-dom";

const TopBar = () => {


      
  return (
    <nav className="flex justify-between">
      <div>
            <span>CareerHub</span>
      </div>
      <ul className="flex gap-2">
        <li>
          <NavLink to="/">Statistics</NavLink>
        </li>
        <li>
          <NavLink to="/appliedJob">Applied Jobs</NavLink>
        </li>
        <li>
            <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>




  );
};

export default TopBar;
