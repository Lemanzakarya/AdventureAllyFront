import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div>
      <aside className="flex" aria-label="Sidebar">
        <div className="p-10 fixed h-full overflow-y-auto rounded bg-green">
          <ul className="mt-20 space-y-2">
          <li>
              <Link to={'/homepage'}>
                <span className={`flex items-center p-2 pr-14 text-base font-normal  hover:text-green text-white rounded-lg hover:bg-white ${location.pathname === '/homepage' ? 'bg-darkgreen' : ''}`}>Home</span>
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
