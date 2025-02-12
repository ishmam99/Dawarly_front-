import home from "../../assets/bottom-menu/material-symbols-light_home-outline-rounded.svg";
import edit from "../../assets/bottom-menu/Layer_1.svg";
import search from "../../assets/bottom-menu/material-symbols-light_search.svg";
import profile from "../../assets/bottom-menu/iconamoon_profile.svg";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#F3F7FA] drop-shadow-2xl rounded-t-2xl lg:hidden">
      <div className="flex justify-around items-center h-16">
        {/* Icon 1 */}
        <div className="hover:bg-[#0083B3] p-2 rounded-full group flex items-center">
          <Link to="/verification">
            <img
              src={edit}
              alt="edit"
              className="w-7 h-7 group-hover:filter group-hover:brightness-0 group-hover:invert "
            />
          </Link>
        </div>

        {/* Icon 2 */}
        <div className="hover:bg-[#0083B3] p-2 rounded-full group">
          <img
            src={search}
            alt="search"
            className="w-7 h-7 object-cover group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
        </div>

        {/* Icon 3 */}
        <div className="hover:bg-[#0083B3] p-2 rounded-full group">
          <Link to="/profile">
            <img
              src={profile}
              alt="profile"
              className="w-7 h-7 object-cover group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
          </Link>
        </div>

        {/* Icon 4 */}

        <div className="hover:bg-[#0083B3] p-2 rounded-full group">
          <Link to="/">
            <img
              src={home}
              alt="home"
              className="w-7 h-7 object-cover group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
