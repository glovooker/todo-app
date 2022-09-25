import React from 'react';
import './TodoItem.css';
import FeatherIcon from 'feather-icons-react';

function TodoItem(props) {
  let actionIcon = 'circle';

  if (props.completed) {
    actionIcon = 'check-circle';
  }

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <FeatherIcon icon={actionIcon} />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <FeatherIcon icon="x-circle" />
      </span>
    </li>
  );
}

export { TodoItem };
