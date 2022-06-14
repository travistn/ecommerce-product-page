import { useState } from 'react';
import { Badge } from '@mui/material';

import CartSummary from '../CartSummary/CartSummary';
import './Navbar.css';
import cartIcon from '../../assets/icon-cart.svg';
import avatar from '../../assets/image-avatar.png';
import logo from '../../assets/logo.svg';

const Navbar = ({ quantity, setQuantity, cartAmount }) => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Badge badgeContent={quantity} color='primary' className='navbar-cart'>
              <img src={cartIcon} alt='cart-icon' onClick={() => setIsOpen(true)} />
            </Badge>
          </li>
          <li>
            <img className='navbar-avatar' src={avatar} alt='avatar' />
          </li>
        </div>
        {isOpen && (
          <CartSummary quantity={quantity} setQuantity={setQuantity} cartAmount={cartAmount} />
        )}
      </ul>
    </div>
  );
};

export default Navbar;
