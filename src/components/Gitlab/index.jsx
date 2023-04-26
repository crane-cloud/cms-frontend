import React from "react";
import NewHeader from "../NewHeader";
import styles from "./Gitlab.module.css";
// import { REGISTER_URL } from "../../config";
import { ReactComponent as GitlabLogo } from "../../assets/images/gitlab.svg";

function Gitlab() {
  return (
    <div>
      <div className={styles.Container}>
        <NewHeader />
        <div className={styles.InformationBar}>Learning Apps/Gitlab</div>
        <div className={styles.MainSection}>
          <div className={styles.CardSection}>
            <GitlabLogo className={styles.Brand} />
            <div className={styles.textCenter}>Gitlab</div>
          </div>
          <div className={styles.CardSection}>
            <div className={styles.Text}>
              <p>Create repositories to store your code.</p>
              <p>Collaborate on projects by creating Groups.</p>
              <p>Discover and Explore open-source projects.</p>
              <p>Seamless setup of your CI/CD pipeline</p>
              {/* <p>
                <a className={styles.Link} href={`${REGISTER_URL}`}>
                  Sign up{" "}
                </a>{" "}
                or if you have an account click below.
              </p> */}
            </div>
            <button className={styles.GetStartedButton}>
              <div>Get Started</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gitlab;
