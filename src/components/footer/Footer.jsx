import logoSvg from '../../assets/img/header/QPICK-logo.svg';
import vkSvg from '../../assets/img/footer/VK.svg';
import scss from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={`${scss.footer} container d-flex justify-content-between`}>
      <nav>
        <img src={logoSvg} alt="logo" />
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/favorite">Избранное</Link>
          </li>
          <li>
            <Link to="/cart">Корзина</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/service">Условия сервиса</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="d-flex gap-3">
          <li>
            <a href="/">
              <img src={vkSvg} alt="vk" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={vkSvg} alt="vk" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={vkSvg} alt="vk" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={vkSvg} alt="vk" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
