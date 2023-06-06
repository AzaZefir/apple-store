import React from 'react';
import scss from './styles/ReadyOrder.module.scss'

export const ReadyOrder = () => {
  return (
    <div className={scss.orderReady}>
      <div>
        <p>Номер вашего заказа №123123, с Вами свяжется наш менеджер.</p>
      </div>
    </div>
  );
};
