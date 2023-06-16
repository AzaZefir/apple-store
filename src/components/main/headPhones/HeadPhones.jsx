import scss from './HeadPhones.module.scss';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../../config/firebase';
import { HeadPhonesSingleItem } from './headPhonesSingleItem/HeadPhonesSingleItem';

export const HeadPhones = ({ setFavoritesData, favoritesData,handleAddToCartFav }) => {
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
          <HeadPhonesSingleItem
            el={el}
            {...el}
            setFavoritesData={setFavoritesData}
            favoritesData={favoritesData}
            handleAddToCartFav={handleAddToCartFav}
          />
        ))}
      </div>
    </section>
  );
};
