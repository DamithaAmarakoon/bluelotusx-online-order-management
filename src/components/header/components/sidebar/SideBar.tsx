import * as React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

// icons and logos
import logo from '../../../../assets/images/logo.jpeg';
import CloseIcon from '@material-ui/icons/Close';

// sidebar content
import { navItems } from '../../../../config/navItems';

// styles
import styles from './SideBar.module.scss';

interface IProps {
  toggleSidebar: () => void;
  expanded: boolean;
}

const SideBar: React.FC<IProps> = ({ toggleSidebar, expanded }) => {
  return (
    <div className={cx(styles.sidebar, expanded ? styles.show : styles.hide)}>
      <div className={styles.header}>
        <img src={logo} alt='Company Logo' className={styles.logo} />
        <CloseIcon
          className={styles.close_icon}
          onClick={toggleSidebar}
          fontSize='large'
        />
      </div>
      <div className={styles.content}>
        {navItems.map((item) => (
          <Link key={v4()} to={item.path} onClick={toggleSidebar}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
