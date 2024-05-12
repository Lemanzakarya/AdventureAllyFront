import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const homepage = () => {
  return (
    <nav>
      <div className='h-10vh flex justify-between z-50 text-white lg:py-0 px-10 py-2'>
        <div className='flex items-center flex-1'>
          <span><img src={logo} className='size-24 object-cover'/></span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden '>
          <div className='flex-10'>
            <ul className='flex gap-8 text-[14px]'>
            <Link to={'/homepage'}>
               <li>HomePage</li>
          </Link>
          <Link to={'/search'}>
               <li>Search</li>
          </Link>
          <Link to={'/tour'}>
               <li>Tours</li>
          </Link>
          <Link to={'/profile'}>
               <li>Profile</li>
          </Link>
          <Link to={'/map'}>
               <li>Map</li>
          </Link>      
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default homepage;