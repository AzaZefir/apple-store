import scss from '../headPhones/HeadPhones.module.scss'
import wHPic from '../../../assets/img/headPhones/wirelessAirPods.svg'
import { WirelessHeadphonesSingleItem } from './wirelessHeadphonesSingleItem/WirelessHeadphonesSingleItem'

export const WirelessHeadPhones = ({setFavoritesData, favoritesData,handleAddToCartFav}) => {
  const headPhonesData = [
    {
      id: 1,
      img: wHPic,
      title: 'Apple BYZ S852I',
      price: 2927,
      oldPrice: 3527,
      rating: 4.7,
    },
    {
      id: 2,
      img: wHPic,
      title: 'Apple EarPods',
      price: 2927,
      oldPrice: 3527,
      rating: 4.7,
    },
    {
      id: 3,
      img: wHPic,
      title: 'Apple EarPods',
      price: 2927,
      oldPrice: 3527,
      rating: 4.7,
    },
  ];
  return (
    <section className={`${scss.headphones} container `}>
      <h4>Беспроводные наушники</h4>
      <div
        className={`${scss.cards} 
      d-flex justify-content-between flex-wrap gap-3`}>
        {headPhonesData.map((el) => (
          <WirelessHeadphonesSingleItem el={el} {...el} setFavoritesData={setFavoritesData} favoritesData={favoritesData} handleAddToCartFav={handleAddToCartFav}/>
        ))}
      </div>
    </section>
  );
}
