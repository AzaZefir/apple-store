import React from 'react';
import Logo from '../../assets/img/header/QPICK-logo.svg';
import PhoneSvg from '../../assets/img/header/phoneSvg.svg';
import FavoriteSvg from '../../assets/img/header/favoriteSvg.svg';
import CartSvg from '../../assets/img/header/cartSvg.svg';

import scss from './Header.module.scss';
import { Link } from 'react-router-dom';
import { CustomDropdown } from '../common/CustomDropdown';

export const Header = ({ emptyCart }) => {
  return (
    <header className={scss.header}>
      <div className="container d-flex align-items-center justify-content-between">
        <nav className="d-flex align-items-center gap-5">
          <Link to="/">
            <img src={Logo} alt="logo" title="logo" />
          </Link>
          <CustomDropdown img={PhoneSvg} text="Выбрать модель телефона" />
        </nav>
        <nav className="d-flex gap-4">
          <Link to="/favorites">
            <img src={FavoriteSvg} alt="favorite" title="favorite" />
          </Link>
          <Link to="/cart">
            <img src={CartSvg} alt="cart" title="cart" />
          </Link>
          {emptyCart.length ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-lg"
              viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
          ) : (
            ''
          )}
        </nav>
      </div>
    </header>
  );
};
