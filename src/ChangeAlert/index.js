import React from 'react';
import { Modal } from '../Modal';
import { useStorageListener } from './useStorageListener';
import FeatherIcon from 'feather-icons-react';
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <Modal>
        <div className='ChangeAlert-container'>
          <FeatherIcon
            size='60'
            icon='refresh-cw'
          />
          <label>New Changes Found!</label>
          <div className='ChangeAlert-buttonContainer'>
            <button
              className='ChangeAlert-button ChangeAlert-button--add'
              onClick={() => toggleShow(false)}
            >
              Synchronize
            </button>
          </div>
        </div>
      </Modal>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
