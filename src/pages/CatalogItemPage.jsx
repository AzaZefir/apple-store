import React from 'react';
import scss from './styles/CatalogItemPage.module.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Preloader } from '../components/common/Preloader';

export const CatalogItemPage = ({ handleAddToCart }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemData, setItemData] = useState(null);

  const { id } = useParams();

  const onAddToCart = () => {
    const item = {
      id: itemData.id,
      title: itemData.title,
      price: itemData.price,
      img: itemData.img,

    };
    handleAddToCart(item);
  };


  useEffect(() => {
    const getItemData = async () => {
      const item = doc(db, 'cases', id);
      const itemHeadPhones = doc(db, 'headPhones', id);

      const data = await getDoc(item);
      const dataH = await getDoc(itemHeadPhones);

      if (data.exists() || dataH.exists()) {
        const el = {
          id: data.id || dataH.id,
          ...(data.data() || dataH.data()),
        };
        setItemData(el);
        setIsLoading(false);
      }
    };
    getItemData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={`${scss.catalogItemPage} container`}>
          <section className={scss.itemImages}>
            <h4>{itemData.title}</h4>
            <div className={scss.images}>
              <div>
                {itemData.itemImages ? (
                  itemData.itemImages.map((image) => (
                    <img key={image.id} src={image} alt="картинка товара" />
                  ))
                ) : (
                  <p>нет картинок</p>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>{itemData.model}</h3>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column justify-content-between align-items-center">
                    <span>{itemData.price ?? 0} сом</span>
                    <span>{itemData.oldPrice || 0} сом</span>
                  </div>
                  <span className="mx-4">{itemData.discount || 0}%</span>
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
                {itemData.description ? (
                  itemData.description.map((el) => <p key={el.id}>{el}</p>)
                ) : (
                  <p>нет описания</p>
                )}
              </div>
            </div>
            <div className="col-3 d-flex flex-column gap-4">
              <button>Купить!</button>
              <button onClick={onAddToCart}>Добавить в корзину</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
