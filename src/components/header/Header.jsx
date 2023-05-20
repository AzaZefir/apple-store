import React from 'react';
import Logo from '../../assets/img/header/QPICK-logo.svg';
import PhoneSvg from '../../assets/img/header/phoneSvg.svg';
import FavoriteSvg from '../../assets/img/header/favoriteSvg.svg';
import CartSvg from '../../assets/img/header/cartSvg.svg';

import scss from './Header.module.scss'

export const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container d-flex align-items-center justify-content-between">
        <nav className='d-flex align-items-center gap-5'>
          <a href="/">
            <img src={Logo} alt="logo" title="logo" />
          </a>
          <div className={`${scss.popup} d-flex gap-2`}>
            <img src={PhoneSvg} alt="phone" title="phone" />
            <select>
              <option>Выбрать модель телефона</option>
            </select>
          </div>
        </nav>
        <nav className='d-flex gap-4'>
          <a href="/">
            <img src={FavoriteSvg} alt="favorite" title="favorite" />
          </a>
          <a href="/">
            <img src={CartSvg} alt="cart" title="cart" />
          </a>
        </nav>
      </div>
    </header>
  );
};
