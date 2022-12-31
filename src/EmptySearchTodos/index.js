import React from 'react';
import FeatherIcon from 'feather-icons-react';
import './EmptySearchTodos.css';

function EmptySearchTodos(props) {
  return (
    <div className='EmptySearchTodos'>
      <FeatherIcon
        icon='alert-circle'
        size='40'
      />
      <h1>
        No results found for "{props.searchText}"
        <br />
        Add a new task...
      </h1>
    </div>
  );
}

export { EmptySearchTodos };
