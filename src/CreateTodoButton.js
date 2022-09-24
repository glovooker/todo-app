import React from 'react';
import './CreateTodoButton.css';
import FeatherIcon from 'feather-icons-react';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton('Aquí se debería abrir el modal')}
    >
      <FeatherIcon icon="plus" size="40" />
    </button>
  );
}

export { CreateTodoButton };
