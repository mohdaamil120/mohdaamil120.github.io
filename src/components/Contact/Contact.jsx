import React from "react";
import email from "../../assets/email.png"
import git from "../../assets/Github (2).png"
import linkdin from "../../assets/Linkdin.png"
import phone from "../../assets/Phone.png"

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a id="contact-email" href="mohdaamil120@gmail.com">mohdaamil120@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkdin}
            alt="LinkedIn icon"
          />
          <a id="contact-linkedin" href="https://www.linkedin.com/in/mohd-aamil/">in/mohd-aamil/</a>
        </li>
        <li className={styles.link}>
          <img src={git} alt="Github icon" />
          <a  id="contact-github" href="https://github.com/mohdaamil120">github.com/mohdaamil120</a>
        </li>
        <li className={styles.link}>
          <img src={phone} alt="Github icon" />
          <a id="contact-phone" href="">+91 6390821907</a>
          <a id="contact-phone" href="">+91 8756438754</a>
        </li>
      </ul>
    </footer>
  );
};