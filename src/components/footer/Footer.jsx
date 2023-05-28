import logoSvg from '../../assets/img/header/QPICK-logo.svg';
import vkSvg from '../../assets/img/footer/VK.svg';
import scss from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={`${scss.footer} container d-flex justify-content-between`}>
      <nav>
        <img src={logoSvg} alt="logo" />
      </nav>
      <nav>
        <ul>
          <li>
            <a href="/">Избранное</a>
          </li>
          <li>
            <a href="/">Корзина</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a href="/">Условия сервиса</a>
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
