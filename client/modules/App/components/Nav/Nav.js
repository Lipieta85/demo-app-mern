import React from 'react';
import { Link } from 'react-router';
import styles from './nav.css';


const Nav = () => (
    <li className={styles['nav']}>
        <Link className={styles['nav-link']}to="/home">Home</Link>
        <Link className={styles['nav-link']}to="/">Posts</Link>
        <Link className={styles['nav-link']}to="/about">About</Link>
    </li>
);
export default Nav;
