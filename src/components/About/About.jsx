import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import cartoon from "../../assets/cartoon.png"
import cur from "../../assets/4.png"
import server from "../../assets/2.png"
import ui from "../../assets/3.png"
import styled from "styled-components";

export const About = () => {
  return (
    <DIV>
    <section id="about" className="about section" >
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={cartoon}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cur} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={server} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={ui} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </DIV>
  );
};

const DIV = styled.div`
  .about section{
    position: relative;
    background-color: transparent;
    background-color: rgba(12, 12, 12, 0.6);
    border-radius: 15px;
    padding: 73px;
    margin-top: 129px;
    z-index: 1;
    margin-left: 10%;
    margin-right: 10%;
  }

   @media screen and (max-width: 830px) {
      .about section {
        background-color: transparent;
        padding-left: 0;
        padding-right: 0;
      }

 }
`

// className={styles.container} 