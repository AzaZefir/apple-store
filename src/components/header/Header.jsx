import React from 'react';
import Logo from '../../assets/img/header/QPICK-logo.svg';
import PhoneSvg from '../../assets/img/header/phoneSvg.svg';
import FavoriteSvg from '../../assets/img/header/favoriteSvg.svg';
import CartSvg from '../../assets/img/header/cartSvg.svg';

import scss from './Header.module.scss'
import { Link } from 'react-router-dom';
import { CustomDropdown } from '../common/CustomDropdown';

export const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container d-flex align-items-center justify-content-between">
        <nav className='d-flex align-items-center gap-5'>
          <Link to="/">
            <img src={Logo} alt="logo" title="logo" />
          </Link>
          <CustomDropdown img={PhoneSvg} text='Выбрать модель телефона'/>
        </nav>
        <nav className='d-flex gap-4'>
          <a href="/">
            <img src={FavoriteSvg} alt="favorite" title="favorite" />
          </a>
          <Link to="/cart">
            <img src={CartSvg} alt="cart" title="cart" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
