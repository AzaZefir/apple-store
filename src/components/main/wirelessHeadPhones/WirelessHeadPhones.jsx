import scss from '../headPhones/HeadPhones.module.scss'
import wHPic from '../../../assets/img/headPhones/wirelessAirPods.svg'
import favoriteSvg from '../../../assets/img/headPhones/fav.svg'
import ratingStarSvg from '../../../assets/img/headPhones/retingStar.svg'

export const WirelessHeadPhones = () => {
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
          <div
            key={el.id}
            className={`${scss.card} 
                d-flex align-items-center justify-content-center`}>
            <img src={favoriteSvg} alt="favorite" />
            <figure className='d-flex flex-column w-75'>
              <img src={el.img} alt={el.title} />
              <figcaption className='d-flex justify-content-between'>
                <div className={scss.title}>
                  <p>{el.title}</p>
                  <div className='d-flex align-items-start'>
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
}
