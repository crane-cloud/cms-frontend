import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../Logo";

import styles from "./Header.module.css";
import { DOCS_URL, FRONTEND_URL } from "../../config";

const Header = (props) => {
  return (
    <header className={styles.Header}>
      <Logo />

      <div className={styles.HeaderLinksWrap}>
        <div className={styles.HeaderLinks}>
          <a
            href={`${DOCS_URL}`}
            className={styles.HeaderLinkDocs}
            rel="noopener noreferrer"
            target="_blank"
          >
            Docs
          </a>
          <a
            href={`${FRONTEND_URL}/login`}
            className={`${styles.HeaderLinkLogin} ${styles.TurnLight}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
