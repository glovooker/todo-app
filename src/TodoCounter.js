import React from 'react';
import './TodoCounter.css';
import logo from './assets/logo.png';

function TodoCounter({ total, completed }) {
  return (
    <div className="TodoHeader">
      <div className="TodoHeaderLogo">
        <a
          href="https://gabrielloboportfolio.gatsbyjs.io/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logo} className="personal-logo" alt="Logo Gabriel Lobo" />
        </a>
      </div>
      <h1 className="TodoTitle">Just Your TO DO's</h1>
      <h3 className="TodoCounter">
        You've completed {completed} out of {total}
      </h3>
    </div>
  );
}

export { TodoCounter };
