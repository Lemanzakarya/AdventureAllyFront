import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png'

const Sidebar = () => {

  return (
    <div>
      <aside className="flex" aria-label="Sidebar">
        <div className="p-10 fixed h-full overflow-y-auto rounded bg-darkgreen">
          <ul className="mt-20 ml-2 space-y-2">
          <div className='flex items-center flex-1'>
          <span><img src={logo} className='size-24 object-cover'/></span>
        </div>
          <li>
              <Link to={'/homepage'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal  hover:text-green text-white rounded-lg hover:bg-white  ${location.pathname === '/homepage' ? 'bg-lightgreen' : ''}`}>Home</span>
              </Link>
            </li>
            <li>
              <Link to={'/search'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-green text-white rounded-lg hover:bg-white  ${location.pathname === '/search' ? 'bg-darkgreen' : ''}`}>Search</span>
              </Link>
            </li>
            <li>
              <Link to={'/tour'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-green text-white rounded-lg hover:bg-white  ${location.pathname === '/tour' ? 'bg-darkgreen' : ''}`}>Tours</span>
              </Link>
            </li>
            <li>
              <Link to={'/profile'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-green text-white rounded-lg hover:bg-white  ${location.pathname === '/profile' ? 'bg-darkgreen' : ''}`}>Profile</span>
              </Link>
            </li>
            <li>
              <Link to={'/map'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal  hover:text-green text-white rounded-lg hover:bg-white  ${location.pathname === '/map' ? 'bg-darkgreen' : ''}`}>Map</span>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal hover:text-green text-white rounded-lg hover:bg-white  ${location.pathname === '/' ? 'bg-darkgreen' : ''}`}>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
