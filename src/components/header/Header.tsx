import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import userImg from '../../assets/images/icon-user.png';
import { useDispatch } from 'react-redux';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';

// components
import SideBar from './components/sidebar/SideBar';

// icons
import MenuIcon from '@material-ui/icons/Menu';

// styles
import styles from './Header.module.scss';
import { getPathName } from '../../config/navItems';
import { logoutUser } from '../../actions/auth/auth';

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => setExpanded(!expanded);

  return pathname === '/login' ? null : (
    <div className={styles.header_wrapper}>
      <div className={styles.navbar}>
        <MenuIcon
          className={styles.nav_icon}
          fontSize='large'
          onClick={toggleSidebar}
        />
        <SideBar toggleSidebar={toggleSidebar} expanded={expanded} />
      </div>
      <span className={styles.header_title}>
        {getPathName(pathname).data?.name}
      </span>

      <UncontrolledDropdown>
        <DropdownToggle id={styles.dropdown_toggle}>
          <img
            src={userImg}
            className={styles.user_profile}
            alt='User Profile'
          />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={() => dispatch(logoutUser())}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default Header;
