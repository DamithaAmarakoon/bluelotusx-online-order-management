import React, { useState } from 'react';
import cx from 'classnames';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';

// styles
import styles from './ConfirmButton.module.scss';

interface IProps {
  classNames?: string;
}

const btnState = [
  {
    type: 'ready',
    label: 'Ready',
    action: () => {
      console.log('button ready');
    },
  },
  {
    type: 'dispatch',
    label: 'Dispatch',
    action: () => {
      console.log('button dispatch');
    },
  },
  {
    type: 'complete',
    label: 'Complete',
    action: () => {
      console.log('button complete');
    },
  },
  {
    type: 'cancel',
    label: 'Cancel',
    action: () => {
      console.log('button cancel');
    },
  },
];

const ConfirmButton: React.FC<IProps> = ({ classNames }) => {
  const [nextState, setNextState] = useState(btnState[2]);

  const setButtonState = (type: string) => {
    const newState = btnState.find((btn) => btn.type === type);
    setNextState(newState || btnState[2]);
  };

  return (
    <div className={cx(styles.action_buttons, classNames)}>
      <button
        type='button'
        onClick={nextState.action}
        className={cx(styles.action_button, classNames)}
      >
        {nextState.label}
      </button>
      <UncontrolledDropdown>
        <DropdownToggle className={styles.toggle_menu} caret>
          {''}
        </DropdownToggle>
        <DropdownMenu>
          {btnState.map((btn) => (
            <DropdownItem
              onClick={() => setButtonState(btn.type)}
              key={btn.type}
            >
              {btn.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default ConfirmButton;
