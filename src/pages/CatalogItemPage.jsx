import React from 'react';
import scss from './styles/CatalogItemPage.module.scss';
import img1 from '../assets/img/catalogItem/image.svg'

export const CatalogItemPage = () => {
  return (
    <div className={`${scss.catalogItemPage} container`}>
      <section className={scss.itemImages}>
        <h4>Автодержатель</h4>
        <div className={scss.images}>
          <div>
            <img src={img1} alt="картинка товара" />
            <img src={img1} alt="картинка товара" />
            <img src={img1} alt="картинка товара" />
            <img src={img1} alt="картинка товара" />
            <img src={img1} alt="картинка товара" />
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <h3>BOROFONE BH32</h3>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column justify-content-between align-items-center'>
                <span>2 927 сом</span>
                <span>3 500 сом</span>
              </div>
              <span className='mx-4'>-20%</span>
            </div>
          </div>
        </div>
      </section>
      <section className={`${scss.description} row`}>
        <div className='col col-md-9'>
          <div></div>
          <div></div>
        </div>
        <div className='col col-md-3'>
          <button>Купить!</button>
          <button>Добавить в корзину</button>
        </div>
      </section>
    </div>
  );
};
