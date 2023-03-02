import Form from './Form/Form';
import TodoItem from './TodoItem/TodoItem';

import { useSelector } from 'react-redux';
export const App = () => {
  const todos = useSelector(state => state.todo.todos);

  return (
    <div>
      <Form />
      {todos?.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </div>
  );
};
