import React from "react";
import NewHeader from "../NewHeader";
import styles from "./LApp.module.css";
import { REGISTER_URL, JUPYTERHUB_URL } from "../../config";

function LearningApp() {
  return (
    <div>
      <div className={styles.Container}>
        <NewHeader />
        <div className={styles.InformationBar}>Learning Apps/Jupyter</div>
        <div className={styles.MainSection}>
          <div className={styles.CardSection}>
            <img
              className={styles.BrandLogo}
              alt="jupyterhub_logo"
              src={require("../../assets/images/jupyterhub.png").default}
            />
            <div className={styles.textCenter}>JupyterHub</div>
          </div>
          <div className={styles.CardSection}>
            <div className={styles.Text}>
              <p>No local installs or configures.</p>
              <p>Multiple Programming language support</p>
              <p>Unparalleled support for ML and data science</p>
              <p>Real-time collaboration for projects and assignments.</p>
              <p>
                <a className={styles.Link} href={`${REGISTER_URL}`}>
                  Sign up{" "}
                </a>{" "}
                or if you have an account click below.
              </p>
            </div>
            <a
              href={`${JUPYTERHUB_URL}`}
              rel="noopener noreferrer"
              target="_blank"
              className={styles.GetStartedButton}
            >
              <div>Get Started</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningApp;
