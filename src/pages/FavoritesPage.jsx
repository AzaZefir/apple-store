import React from 'react';
import { Link } from 'react-router-dom';

export const FavoritesPage = ({favoritesData,handleDeleteFavorite}) => {
  return (
    <div className="favoritesPage container">
      {favoritesData.map((el) => (
        <div
          key={el.id}
          className={`card 
                d-flex align-items-center justify-content-center`}>
          {/* <img src={favoriteSvg} alt="favorite" /> */}
          <button onClick={()=> handleDeleteFavorite(el)}>Удалить</button>
          <figure className="d-flex flex-column w-75">
            <Link to={`/catalog-item-page/${el.id}`}>
              <img src={el.img} alt={el.title} />
            </Link>
            <figcaption className="d-flex justify-content-between">
              <div className='title'>
                <p>{el.title}</p>
                <div className="d-flex align-items-start">
                  {/* <img src={ratingStarSvg} alt="rating" /> */}
                  <span>{el.rating}</span>
                </div>
              </div>
              <div className={`price d-flex flex-column`}>
                <span>{el.price} сом</span>
                <span>{el.oldPrice} сом</span>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};
