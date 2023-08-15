import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const paths = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <div className={styles.navbar}>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          {paths.map((path) => (
            <li key={path.id}>
              <NavLink
                to={path.path}
                className={(link) => (link.isActive ? 'active' : '')}
              >
                {path.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
