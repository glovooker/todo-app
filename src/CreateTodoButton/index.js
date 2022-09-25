import React from 'react';
import './CreateTodoButton.css';
import FeatherIcon from 'feather-icons-react';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);

    if (props.openModal === true && props.buttonDisabled === false) {
      props.setButtonDisabled(true);
    }

    document
      .getElementsByClassName('CreateTodoButton')[0]
      .classList.toggle('opened');
  };
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      <FeatherIcon icon="plus" size="40" />
    </button>
  );
}

export { CreateTodoButton };
