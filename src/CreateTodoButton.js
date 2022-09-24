import React from 'react';
import './CreateTodoButton.css';
import FeatherIcon from 'feather-icons-react';

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton">
      <FeatherIcon icon="plus" size="40" />
    </button>
  );
}

export { CreateTodoButton };
