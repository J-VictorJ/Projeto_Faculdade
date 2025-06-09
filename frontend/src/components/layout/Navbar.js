import { Link } from "react-router-dom";
import React, { useContext } from "react";

import styles from "./Navbar.module.css";

import Logo from "../../assets/img/logo.png";

/* contexts */
import { Context } from "../../context/UserContext";

/* hooks */

function Navbar() {
  const { authenticated, logout } = useContext(Context);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={Logo} alt="KCHORRINHOS" />
        <h2>KCHORRINHOS</h2>
      </div>
    </nav>
  );
}

export default Navbar;
