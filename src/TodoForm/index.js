import React from 'react';
import { TodoContext } from '../TodoContext';
import FeatherIcon from 'feather-icons-react';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const { buttonDisabled, setButtonDisabled } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    if (event.target.value.length >= 1) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const onCancel = () => {
    setOpenModal(false);
    document
      .getElementsByClassName('CreateTodoButton')[0]
      .classList.toggle('opened');
    setButtonDisabled(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    document
      .getElementsByClassName('CreateTodoButton')[0]
      .classList.toggle('opened');
    setButtonDisabled(true);
  };

  return (
    <form onSubmit={onSubmit}>
      <FeatherIcon size="60" icon="plus-square" />
      <label>Add a New To Do</label>
      <input
        type="text"
        name="text"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Type a task..."
      />

      <div className="TodoForm-buttonContainer">
        <button
          type="submit"
          className={`TodoForm-button TodoForm-button--add ${
            buttonDisabled && 'disabled'
          }`}
          disabled={buttonDisabled}
        >
          Add
        </button>
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
