import scss from './HeadPhones.module.scss';
import favoriteSvg from './../../../assets/img/headPhones/fav.svg';
import ratingStarSvg from './../../../assets/img/headPhones/retingStar.svg';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../../config/firebase';
import { Link } from 'react-router-dom';

export const HeadPhones = () => {
  const [headPhonesData, setHeadPhonesData] = useState([]);
  console.log(headPhonesData);

  const headPhonesRef = collection(db, 'headPhones');

  useEffect(() => {
    const getHeadPhonesData = async () => {
      try {
        const data = await getDocs(headPhonesRef);
        const items = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setHeadPhonesData(items);
      } catch (error) {
        console.log(error);
      }
    };
    getHeadPhonesData();
  }, []);

  return (
    <section className={`${scss.headphones} container `}>
      <h4>Наушники</h4>
      <div
        className={`${scss.cards} 
      d-flex justify-content-between flex-wrap gap-3`}>
        {headPhonesData.map((el) => (
          <div
            key={el.id}
            className={`${scss.card} 
                d-flex align-items-center justify-content-center`}>
            <img src={favoriteSvg} alt="favorite" />

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
        ))}
      </div>
    </section>
  );
};
