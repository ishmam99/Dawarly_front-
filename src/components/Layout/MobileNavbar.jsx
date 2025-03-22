import home from "../../assets/bottom-menu/material-symbols-light_home-outline-rounded.svg";
import edit from "../../assets/bottom-menu/Layer_1.svg";
import search from "../../assets/bottom-menu/material-symbols-light_search.svg";
import profile from "../../assets/bottom-menu/iconamoon_profile.svg";
import { Link } from "react-router-dom";
import useAuthContext from '../../context/AuthContext'
const BottomNavbar = () => {
  const { user, login, logout } = useAuthContext()
    const handleLogout = async () => {
      try {
        await logout()
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-[#F3F7FA] drop-shadow-2xl rounded-t-2xl lg:hidden'>
      <div className='flex justify-around items-center h-16'>
        {/* Icon 1 */}
        <div className='hover:bg-[#0083B3] p-2 rounded-full group flex items-center'>
          <Link to='/contact'>
            <img
              src={edit}
              alt='edit'
              className='w-7 h-7 group-hover:filter group-hover:brightness-0 group-hover:invert '
            />
          </Link>
        </div>

        {/* Icon 2 */}
        <div className='hover:bg-[#0083B3] p-2 rounded-full group'>
            <Link to='/about'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-7 h-7 text-gray-500'
          >
            <path d='M12 22C6.47715 22 2 17.5228 2 12 2 6.47715 6.47715 2 12 2 17.5228 2 22 6.47715 22 12 22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12 20 7.58172 16.4183 4 12 4 7.58172 4 4 7.58172 4 12 4 16.4183 7.58172 20 12 20ZM13 10.5V15H14V17H10V15H11V12.5H10V10.5H13ZM13.5 8C13.5 8.82843 12.8284 9.5 12 9.5 11.1716 9.5 10.5 8.82843 10.5 8 10.5 7.17157 11.1716 6.5 12 6.5 12.8284 6.5 13.5 7.17157 13.5 8Z'></path>
          </svg></Link>
        </div>

        {/* Icon 3 */}
        <div className='hover:bg-[#0083B3] p-2 rounded-full group'>
          <Link to={user ? '/profile' : '/login'}>
            <img
              src={profile}
              alt='profile'
              className='w-7 h-7 object-cover group-hover:filter group-hover:brightness-0 group-hover:invert'
            />
          </Link>
        </div>

        {/* Icon 4 */}

        <div className='hover:bg-[#0083B3] p-2 rounded-full group'>
          <Link to='/'>
            <img
              src={home}
              alt='home'
              className='w-8 h-8 object-cover group-hover:filter group-hover:brightness-0 group-hover:invert'
            />
          </Link>
        </div>
        {/* <div className='hover:bg-[#0083B3] p-2 rounded-full group'>
          {user ? (
            <button onClick={handleLogout} className=''>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-7 h-7 text-gray-500'
              >
                <path d='M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z'></path>
              </svg>
            </button>
          ) : (
            <Link to='/login'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-7 h-7 text-gray-500'
              >
                <path d='M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z'></path>
              </svg>
            </Link>
          )}
        </div> */}
      </div>
    </nav>
  )
};

export default BottomNavbar;
