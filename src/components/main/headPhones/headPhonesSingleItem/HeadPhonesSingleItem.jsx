import React, { useState } from 'react';
import favoriteSvg from './../../../../assets/img/headPhones/fav.svg';
import favoriteSvgClicked from './../../../../assets/img/headPhones/favClicked.svg';
import ratingStarSvg from './../../../../assets/img/headPhones/retingStar.svg';
import { Link } from 'react-router-dom';
import scss from './../HeadPhones.module.scss';

export const HeadPhonesSingleItem = ({ el, setFavoritesData, favoritesData, handleAddToCartFav }) => {
  const [active, setActive] = useState(false);

  const removeFavorites = (id) => {
    setFavoritesData(favoritesData.filter((element) => element.id !== id));
  };

  const selectFavoritesItems = () => {
    setActive(!active);
    if (!active) {
      handleAddToCartFav(el);
    } else {
      removeFavorites(el.id)
    }
  };

  return (
    <div
      key={el.id}
      className={`${scss.card} 
        d-flex align-items-center justify-content-center`}>
      {active ? (
        <img onClick={selectFavoritesItems} src={favoriteSvgClicked} alt="favorite" />
      ) : (
        <img onClick={selectFavoritesItems} src={favoriteSvg} alt="favorite" />
      )}

      <figure className="d-flex flex-column w-75">
        <Link to={`/catalog-item-page/${el.id}`}>
          <img src={el.img} alt={el.title} />
        </Link>
        <figcaption className="d-flex justify-content-between">
          <div className={scss.title}>
            <p>{el.title}</p>
            <div className="d-flex align-items-start">
              <img src={ratingStarSvg} alt="rating" />
              <span>{el.rating}</span>
            </div>
          </div>
          <div className={`${scss.price} d-flex flex-column`}>
            <span>{el.price} сом</span>
            <span>{el.oldPrice} сом</span>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
