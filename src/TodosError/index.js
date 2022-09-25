import React from 'react';
import FeatherIcon from 'feather-icons-react';
import './TodosError.css';

function TodosError({ error }) {
  return (
    <div className="TodosError">
      <FeatherIcon icon="alert-triangle" size="40" />
      <h1>{error}</h1>
    </div>
  );
}

export { TodosError };
