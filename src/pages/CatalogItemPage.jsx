import React from 'react';
import scss from './styles/CatalogItemPage.module.scss';
import img1 from '../assets/img/catalogItem/image.svg';

export const CatalogItemPage = () => {
  const descriptionText = [
    {
      id: 1,
      text: 'Активное шумоподавление: Нет',
    },
    {
      id: 2,
      text: 'Вес: 10 гр',
    },
    {
      id: 3,
      text: 'Влагозащита: Нет',
    },
    {
      id: 4,
      text: 'Длина кабеля: 1.2 м',
    },
    {
      id: 5,
      text: 'Комплектация: Наушники',
    },
    {
      id: 6,
      text: 'Материал корпуса: Пластик, резина',
    },
    {
      id: 7,
      text: 'Микрофон: Да',
    },
    {
      id: 8,
      text: 'Назначение: Проводные наушники',
    },
    {
      id: 9,
      text: 'Ответить/закончить разговор: Да',
    },
    {
      id: 10,
      text: 'Разъем наушников: Lightning',
    },
    {
      id: 11,
      text: 'Регулятор громкости: Да',
    },
    {
      id: 12,
      text: 'Тип крепления: Без крепления',
    },
    {
      id: 13,
      text: 'Тип наушников: Вкладыши ("таблетки")',
    },
    {
      id: 14,
      text: 'Тип подключения: Проводное',
    },
  ];

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
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3>BOROFONE BH32</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <span>2 927 сом</span>
                <span>3 500 сом</span>
              </div>
              <span className="mx-4">-20%</span>
            </div>
          </div>
        </div>
      </section>
      <section className={`${scss.description} row`}>
        <div className="col-8">
          <div className="d-flex align-items-center justify-content-start px-4">
            <p className="mb-0">Описание и характеристики</p>
          </div>
          <div className="d-flex flex-column align-items-start justify-content-start p-4">
            {descriptionText.map((el) => (
              <p key={el.id}>{el.text}</p>
            ))}
          </div>
        </div>
        <div className="col-3 d-flex flex-column gap-4">
          <button>Купить!</button>
          <button>Добавить в корзину</button>
        </div>
      </section>
    </div>
  );
};
