import './Navbar.css';
import cartIcon from '../../assets/icon-cart.svg';
import avatar from '../../assets/image-avatar.png';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='navbar__wrapper'>
      <ul className='navbar'>
        <li className='navbar-logo'>
          <img src={logo} alt='logo' />
        </li>
        <div className='navbar-links'>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <div className='navbar-right'>
          <li>
            <img className='navbar-cart' src={cartIcon} alt='cart-icon' />
          </li>
          <li>
            <img className='navbar-avatar' src={avatar} alt='avatar' />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
