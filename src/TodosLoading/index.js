import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-Container">
      <span className="LoadingTodo-Icon add" />
      <p className="LoadingTodo-text">Loading...</p>
      <span className="LoadingTodo-Icon delete" />
    </div>
  );
}

export { TodosLoading };
