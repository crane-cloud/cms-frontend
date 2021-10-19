import React from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../Logo";

import styles from "./Header.module.css";
import { DOCS_URL, LOGIN_URL } from "../../config";

const Header = (props) => {
  return (
    <header className={styles.Header}>
      <Logo />

      <div className={styles.HeaderLinksWrap}>
        <div className={styles.HeaderLinks}>
          <Link to="/team" className={styles.HeaderLinkDocs}>
            Team
          </Link>
          <a
            href={`${DOCS_URL}`}
            className={styles.HeaderLinkDocs}
            rel="noopener noreferrer"
            target="_blank"
          >
            Docs
          </a>
          <a
            href={`${LOGIN_URL}`}
            className={`${styles.HeaderLinkLogin} ${styles.TurnLight}`}
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default (withRouter(Header));
