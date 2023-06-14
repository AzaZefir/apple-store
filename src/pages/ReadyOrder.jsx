import React from 'react';
import scss from './styles/ReadyOrder.module.scss'

export const ReadyOrder = ({orderNum}) => {
  return (
    <div className={scss.orderReady}>
      <div>
        <p>Номер вашего заказа №{orderNum}, с Вами свяжется наш менеджер.</p>
      </div>
    </div>
  );
};
