import '../style/status.css';

const Status = () => {
  return (
    <div className="table">
      <div className="table-header">
        <div className="header__item">
          <p className="filter__link">Id</p>
        </div>
        <div className="header__item">
          <p className="filter__link filter__link--number">Title</p>
        </div>
        <div className="header__item">
          <p className="filter__link filter__link--number">Description</p>
        </div>
        <div className="header__item">
          <p className="filter__link filter__link--number">Status</p>
        </div>
      </div>
    </div>
    // <div className="status">
    //   <ul className="status__list">
    //     <li className="status__item">id</li>
    //     <li className="status__item">title</li>
    //     <li className="status__item">description</li>
    //     <li className="status__item">status</li>
    //   </ul>
    // </div>
  );
};

export default Status;
