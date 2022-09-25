import React from 'react';
import FeatherIcon from 'feather-icons-react';
import './EmptyTodos.css';

function EmptyTodos() {
  return (
    <div className="EmptyTodos">
      <FeatherIcon icon="check-circle" size="40" />
      <h1>
        You're done!
        <br />
        Add a new task...
      </h1>
    </div>
  );
}

export { EmptyTodos };
