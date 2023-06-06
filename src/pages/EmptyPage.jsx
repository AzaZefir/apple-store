import { Link } from 'react-router-dom'
import emptyCartSvg from '../assets/img/cart/Иллюстрация.svg'

import scss from './styles/EmptyCart.module.scss'

export const EmptyPage = () => {
  return (
    <div className={`${scss.emptyCart} d-flex align-items-center justify-content-center`}>
      <div className='d-flex align-items-center justify-content-center flex-column gap-3'>
        <img src={emptyCartSvg} alt="Картинка пустого товара" />
        <h5>Корзина пуста</h5>
        <p>Но это никогда не поздно исправить :)</p>
        <Link to='/'>В каталог товаров</Link>
      </div>
    </div>
  )
}
