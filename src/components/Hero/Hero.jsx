import React from "react";
import image from "../../assets/Mohd-Aamil-Image.jpeg"
import styles from "./Hero.module.css";


export const Hero = () => {

  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <h1 id="user-detail-name" className={styles.title}>Hi, I m</h1>
        <h1 id="user-detail-name" style={{fontSize:"72px"}} className={styles.title}>Mohd Aamil</h1>
        <p id="user-detail-intro" className={styles.description}>
        Mastering Full Stack web development at Masai School, I thrive on crafting diverse projects, evolving my skills with every code written!
        </p>
       <div id={styles.contactBtn}>
          <a href="mohdaamil120@gmail.com" className={styles.contactBtn}>
              Contact
          </a>

          {/* <a id="resume-link-2" href="https://drive.google.com/file/d/11fP0CF_NP8LQWnL31o5lFVZAyDsDsx5y/view?usp=sharing" target="_blank" className={styles.contactBtn} download>
              Resume
          </a> */}

          {/* 'https://drive.google.com/file/d/11fP0CF_NP8LQWnL31o5lFVZAyDsDsx5y/view?usp=sharing'  */}
          
            <a  id="resume-link-2" className={styles.contactBtn} href="https://drive.google.com/uc?export=download&id=11fP0CF_NP8LQWnL31o5lFVZAyDsDsx5y" target="_blank" download>
                 
                  <div onClick={()=>{
                     window.open("https://drive.google.com/file/d/11fP0CF_NP8LQWnL31o5lFVZAyDsDsx5y/view?usp=sharing")
                 }}> Resume </div>
            </a>
           
       
       </div>
      </div>
      <img
        src={image}
        alt="Hero image of me"
        id={styles.heroImg}
        className="home-img"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};