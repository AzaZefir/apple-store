import './styles/Preloader.scss';

export const Preloader = () => {
  return (
    <div className='loader-wrapper'>
      <div className="loader">
        <div className="loader_cube loader_cube--color"></div>
        <div className="loader_cube loader_cube--glowing"></div>
      </div>
    </div>
  );
};
