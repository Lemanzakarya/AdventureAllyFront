import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='h-10vh flex justify-between z-50 text-white ml-6'>
        <div className='flex items-center flex-1'>
          <span><img src={logo} className='size-24 object-cover'/></span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden mr-6 '>
          <div className='flex-10'>
            <ul className='flex gap-8 text-[14px]'>
            <Link to={'/'}>
               <li>Home</li>
          </Link>
          <Link to={'/contact'}>
               <li>Contact</li>
          </Link>
          <Link to={'/add-your-own-tour'}>
               <li>Add Your Own Tour</li>
          </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;