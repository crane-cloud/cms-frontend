import React from "react";
import NewHeader from "../NewHeader";
import styles from "./GoPlay.module.css";
import { REGISTER_URL, GOPLAYGROUND_URL } from "../../config";
import { ReactComponent as GoPlayground } from "../../assets/images/go.svg";

function GoPlay() {
  return (
    <div>
      <div className={styles.Container}>
        <NewHeader />
        <div className={styles.InformationBar}>Learning Apps/Go Playground</div>
        <div className={styles.MainSection}>
          <div className={styles.CardSection}>
            <GoPlayground className={styles.Brand} />
            <div className={styles.textCenter}>Go Playground</div>
          </div>
          <div className={styles.CardSection}>
            <div className={styles.Text}>
              <p>Accessible everywhere</p>
              <p>Enhanced collaborative learning.</p>
              <p>Simplified environment for learning Go.</p>
              <p>Experimentation on loose with Sandbox environment</p>
              <p>
                <a className={styles.Link} href={`${REGISTER_URL}`}>
                  Sign up{" "}
                </a>{" "}
                or if you have an account click below.
              </p>
            </div>

            <a
              href={`${GOPLAYGROUND_URL}`}
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

export default GoPlay;
