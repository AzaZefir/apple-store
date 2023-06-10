import React from 'react';
import addedItemSvg from '../assets/img/headPhones/airpods.svg';
import minusSvg from '../assets/img/cart/minus.svg';
import plusSvg from '../assets/img/cart/plus.svg';
import deleteSvg from '../assets/img/cart/delete.svg';
import deliverySvg from '../assets/img/cart/delivery.svg';

import scss from './styles/cart.module.scss';
import { CustomDropdown } from '../components/common/CustomDropdown';
import { Link } from 'react-router-dom';
import { EmptyPage } from './EmptyPage';

export const CartPage = ({emptyCart,removeItemFromCart,total}) => {

  return (
    <div className={`${scss.cart} container my-4`}>
      {emptyCart.length ? (
        <section>
          <h4>Корзина</h4>

          <div className="row">
            <div className={`${scss.addedItemBlock} col d-flex flex-column gap-4`}>
              {emptyCart.map((el) => (
                <div
                  className={`${scss.addedItem} d-flex align-items-center justify-content-between`}>
                  <div className="d-flex flex-column gap-2">
                    <figure>
                      <img className='w-50' src={el.img} alt={el.title} />
                    </figure>
                    <div className={`${scss.plusMinus} d-flex gap-3`}>
                      <div className="d-flex align-items-center justify-content-center">
                        <img src={minusSvg} alt="Минус" />
                      </div>
                      <span className="d-flex align-items-center justify-content-center">
                        {total}
                      </span>
                      <div className="d-flex align-items-center justify-content-center">
                        <img src={plusSvg} alt="Плюс" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5>{el.title}</h5>
                    <span>{el.price} сом</span>
                  </div>
                  <div className="d-flex align-items-end justify-content-between flex-column h-100">
                    <img onClick={() => removeItemFromCart(el)} src={deleteSvg} alt="Удалить" />
                    <span> {el.oldPrice} сом</span>
                  </div>
                </div>
              ))}

              <div className={scss.delivery}>
                <h4>Доставка</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11694.777152508403!2d74.53460989999998!3d42.87929635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1685455134594!5m2!1sru!2skg"
                  width="600"
                  height="150"
                  title="hello"
                  style={{ border: '0' }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="d-flex align-items-center justify-content-between mt-3 ">
                  <CustomDropdown img={deliverySvg} text="Доставка курьером" />
                  <span> 499 сом</span>
                </div>
              </div>
            </div>

            <div className={`${scss.total} col d-flex align-items-start justify-content-end`}>
              <div>
                <div className="d-flex justify-content-between">
                  <span>ИТОГО</span>
                  <span>2 927 сом</span>
                </div>
                <Link to="/order" className="d-flex justify-content-center align-items-center">
                  Перейти к оформлению
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <EmptyPage />
      )}
    </div>
  );
};
