import '../style/todo-item.css';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
const TodoItem = ({ todo, index }) => {
  const [modalActive, setModalActive] = useState();
  if (!todo || !todo.title || !todo.description) {
    return null;
  }

  return (
    <div>
      <div className="table">
        <div className="table-header" onClick={() => setModalActive(true)}>
          <div className="header__item">
            <p className="filter__link">{index + 1}</p>
          </div>
          <div className="header__item">
            <p className="filter__link filter__link--number">{todo.title}</p>
          </div>
          <div className="header__item">
            <p className="filter__link filter__link--number">
              {todo.description}
            </p>
          </div>
          <div className="header__item">
            <p className="filter__link filter__link--number">
              <input type="checkbox" />
            </p>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} todo={todo} />
    </div>
  );
};

export default TodoItem;
