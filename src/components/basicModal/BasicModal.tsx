import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';

// icons
import CloseIcon from '@material-ui/icons/Close';

// styles
import styles from './BasicModal.module.scss';

interface IProps {
  children: JSX.Element;
  isOpen: boolean;
  toggle: () => void;
  size: string;
  closeIcon?: boolean;
}

const BasicModal: React.FC<IProps> = ({
  children,
  isOpen,
  toggle,
  size,
  closeIcon = true,
}) => {
  return (
    <Modal size={size} isOpen={isOpen} toggle={toggle}>
      {closeIcon && (
        <CloseIcon className={styles.close_icon} onClick={toggle} />
      )}
      <ModalBody className={styles.modal_body}>{children}</ModalBody>
    </Modal>
  );
};

export default BasicModal;
