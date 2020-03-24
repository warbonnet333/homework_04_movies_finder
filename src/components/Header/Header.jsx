import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () =>
  <div className={styles.header}>
    <ul className={styles.nav}>
      <li><NavLink to="/" exact className={styles.link} activeClassName={styles.active_link}>Home</NavLink></li>
      <li><NavLink to="/movies" className={styles.link} activeClassName={styles.active_link}>Movies</NavLink></li>
    </ul>
  </div >


export default Header