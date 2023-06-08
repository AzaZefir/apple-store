import scss from './Cases.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { Preloader } from '../../common/Preloader';

export const Cases = () => {
  const [casesData, setCasesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const casesItemRef = collection(db, 'cases');

  useEffect(() => {
    const getDataFromFirebase = async () => {
      try {
        const data = await getDocs(casesItemRef);
        const items = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCasesData(items);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDataFromFirebase();
  }, []);
console.log(casesData);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className={`${scss.cases} container `}>
          <h4>Чехлы</h4>
          <div className={`${scss.cards} d-flex justify-content-between`}>
            {casesData.map((el) => (
              <div
                key={el.id}
                className={`${scss.card} 
                d-flex align-items-center justify-content-center`}>
                <figure>
                  <Link to={`/catalog-item-page/${el.id}`}>
                    <img src={el.img} alt={el.title} />
                  </Link>
                  <figcaption>{el.title}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
