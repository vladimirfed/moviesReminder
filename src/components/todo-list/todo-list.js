import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, 
    onToggleImportant, onToggleDone, onChangeStatus }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          {...itemProps }
          // onDeleted = { () => console.log('deleted')}
          onDeleted = { () => onDeleted(id)}
          onToggleDone={()=>onToggleDone(id)}
          onChangeStatus={()=>onChangeStatus(id)}
          onToggleImportant={()=>onToggleImportant(id)}
          />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
