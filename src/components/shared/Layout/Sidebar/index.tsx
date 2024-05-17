import { Link, useLocation } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png'

const Sidebar = () => {
  const location = useLocation();
  return (
        <div className="flex flex-col items-left  h-full  rounded bg-lightgreen min-w-60  min-h-screen relative">
        <div className=''>
          <span><img src={logo} className='ml-16 size-24 object-cover'/></span>
        </div>
          <ul className="mt-16 ml-4 space-y-2">
          <li>
              <Link to={'/homepage'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal  hover:text-white text-white rounded-lg hover:bg-darkergreen  ${location.pathname === '/homepage' ? 'bg-darkgreen' : ''}`}>Home</span>
              </Link>
            </li>
            <li>
              <Link to={'/search'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-white text-white rounded-lg hover:bg-darkergreen  ${location.pathname === '/search' ? 'bg-darkgreen' : ''}`}>Search</span>
              </Link>
            </li>
            <li>
              <Link to={'/tour'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal  hover:text-white text-white rounded-lg hover:bg-darkergreen  ${location.pathname === '/tour' ? 'bg-darkgreen' : ''}`}>Tours</span>
              </Link>
            </li>
            <li>
              <Link to={'/profile'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-white text-white rounded-lg hover:bg-darkergreen  ${location.pathname === '/profile' ? 'bg-darkgreen' : ''}`}>Profile</span>
              </Link>
            </li>
            <li>
              <Link to={'/map'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal  hover:text-white text-white rounded-lg hover:bg-darkergreen ${location.pathname === '/map' ? 'bg-darkgreen' : ''}`}>Map</span>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-white text-white rounded-lg hover:bg-darkergreen ${location.pathname === '/' ? 'bg-darkgreen' : ''}`}>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
     
  );
};

export default Sidebar;
