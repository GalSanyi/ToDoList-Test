import React from 'react';
import '../Modal/modal.css';
const Modal = ({ active, setActive, todo }) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <h1>{todo.title}</h1>

        <p>Description:</p>
        <p>{todo.description}</p>
        <input type="checkbox" />
        <button onClick={() => setActive(false)}>close</button>
      </div>
    </div>
  );
};

export default Modal;
