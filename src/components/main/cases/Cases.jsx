import scss from './Cases.module.scss';
import casesPic from '../../../assets/img/cases/case-pic.svg';

export const Cases = () => {
  const casesData = [
    {
      id: 1,
      img: 'casesPic',
      title: 'Стеклянные',
    },
    {
      id: 2,
      img: casesPic,
      title: 'Силиконовые',
    },
    {
      id: 3,
      img: casesPic,
      title: 'Кожаные',
    },
  ];
  return (
    <section className={`${scss.cases} container `}>
      <h4>Чехлы</h4>
      <div className={`${scss.cards} d-flex justify-content-between`}>
        {casesData.map((el) => (
          <div
            key={el.id}
            className={`${scss.card} 
                d-flex align-items-center justify-content-center`}>
            <figure>
              <img src={el.img} alt={el.title} />
              <figcaption>{el.title}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};
