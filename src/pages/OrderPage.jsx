//? СТИЛИ
import scss from './styles/OrderPage.module.scss';

//? КАРТИНКИ
import geo from '../assets/img/order/geo.svg';
import pencil from '../assets/img/order/pen.svg';
import { Link } from 'react-router-dom';
import visaSvg from '../assets/img/order/visaSvg.svg';
import promoSvg from '../assets/img/order/promo.svg';
import arrorRightSvg from '../assets/img/order/arrowRight.svg';
import arrowDownSvg from '../assets/img/order/arrowDown.svg';
import pen from '../assets/img/order/pen.svg';
import { CustomDropdown } from '../components/common/CustomDropdown';

export const OrderPage = () => {
  const orderVisaTypes = [
    {
      id: 1,
      option: 'MasterCard',
    },
    {
      id: 2,
      option: 'YouMooney',
    },
    {
      id: 3,
      option: 'PayPal',
    },
  ];
  const promoTypes = [
    {
      id: 1,
      option: 'да',
    },
    {
      id: 2,
      option: 'нет',
    },
  ];

  return (
    <div className={`${scss.orderPage} container`}>
      <h4>Оформление заказа</h4>
      <div className={`${scss.order} row`}>
        <div className={`${scss.delivery} col`}>
          <div className="d-flex align-items-center justify-content-between">
            <h5>Доставка курьером</h5>
            <span> 499 сом</span>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11694.777152508403!2d74.53460989999998!3d42.87929635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1685455134594!5m2!1sru!2skg"
              height="150"
              title="hello"
              style={{ border: '0' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="d-flex align-items-start justify-content-start">
            <img src={geo} alt="geolocation" />
            <p className="px-3">Адрес доставки</p>
          </div>
          <form>
            <div className={scss.input}>
              <input type="text" placeholder="Город" />
              <img src={pencil} alt="pencil" />
            </div>
            <div className={scss.input}>
              <input type="text" placeholder="Улица / Район " />
              <img src={pencil} alt="pencil" />
            </div>
            <div className="row">
              <div className="col">
                <div className={scss.input}>
                  <input type="text" placeholder="Дом" />
                  <img src={pencil} alt="pencil" />
                </div>
                <div className={scss.input}>
                  <input type="text" placeholder="Квартира" />
                  <img src={pencil} alt="pencil" />
                </div>
              </div>
              <div className="col">
                <div className={scss.input}>
                  <input type="text" placeholder="Подъезд" />
                  <img src={pencil} alt="pencil" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col d-flex flex-column gap-3">
          <div className={scss.orderPageBlock}>
            <h3>Ваш заказ</h3>
            <div className="d-flex justify-content-between">
              <span>1х</span>
              <p>Наушники Apple BYZ S852I</p>
              <span>2 927 сом</span>
            </div>
            <div className="d-flex justify-content-between">
              <span></span>
              <p>Доставка</p>
              <span>2 927 сом</span>
            </div>
            <div className="d-flex justify-content-between">
              <span></span>
              <p>К оплате</p>
              <span>2 927 сом</span>
            </div>
          </div>
          <div className={scss.orderPageBlock}>
            <h3>Способ оплаты</h3>
            <CustomDropdown
              text="Счет на kaspi.kz"
              selectType={visaSvg}
              data={orderVisaTypes}
              img={arrowDownSvg}
            />
            <CustomDropdown
              text="Есть промокод?"
              selectType={promoSvg}
              data={promoTypes}
              img={arrorRightSvg}
            />
          </div>
          <div className={scss.orderPageBlock}>
            <h3>Номер получателя</h3>
            <div className={scss.orderPageInput}>
              <input type="phone" placeholder="+996 _ _ _ _ _ _" />
              <img src={pen} alt="Номер телефона" />
            </div>
          </div>
          <Link to="/ready-order">Закончить оформление</Link>
        </div>
      </div>
    </div>
  );
};
