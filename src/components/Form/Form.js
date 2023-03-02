import Status from '../Status/Status';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo } from 'components/features/todo/todoSlice';
import '../style/form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');

  const addTodoHandler = () => {
    if (title.trim() === '') {
      setTitleErrorMessage('This field is empty');
    }
    if (description.trim() === '') {
      setDescriptionErrorMessage('This field is empty');
    }
    const todo = {
      id: '',
      title: title,
      description: description,
      status: '',
    };
    dispatch(addTodo(todo));
    setTitle('');
    setDescription('');
  };

  const handleSubmitForm = e => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmitForm} className="form">
            <label>
              Title
              <input
                className="form__input"
                value={title}
                onChange={e => setTitle(e.target.value)}
                style={{
                  border: titleErrorMessage
                    ? '1px solid red'
                    : '1px solid black',
                }}
                placeholder="Enter title"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              {titleErrorMessage && (
                <div style={{ color: 'red' }}>{titleErrorMessage}</div>
              )}
            </label>
            <label>
              Description
              <input
                className="form__input"
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{
                  border: descriptionErrorMessage
                    ? '1px solid red'
                    : '1px solid black',
                }}
                placeholder="Enter description"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              {descriptionErrorMessage && (
                <div style={{ color: 'red' }}>{descriptionErrorMessage}</div>
              )}
            </label>
            <button type="submit" onClick={() => addTodoHandler()}>
              create
            </button>
          </form>
        </div>
      </div>
      <Status />
    </>
  );
};

export default Form;
