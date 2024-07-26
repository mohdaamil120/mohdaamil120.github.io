import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Hamburger from "hamburger-react";
// import pdf from "../../../Resume/Mohd-Aamil-Resume.pdf"
import name from "../../assets/name.png"
import styled from "styled-components";
import resume from "../../Resume/Mohd-Aamil-Resume.pdf"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <nav id="nav-menu" className={`${styles.navbar} ${screenWidth > 830 ? styles.fixed : ""}`}>
      {/* //<nav className={styles.navbar}> */}
      <a className={styles.title} href="/">
        <img src={name} alt="" />
      </a>
      <div className={styles.menu}>
        <p id="hamburger" style={screenWidth > 830 ? { display: 'none' } : null}>
          <Hamburger
            size={24}
            color="#fff"
            toggled={menuOpen}
            toggle={() => setMenuOpen(!menuOpen)}
            style={{ position: 'fixed', top: '10px', left: '10px' }}
          />

        </p>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="/" className="nav-link home" >Home</a>
          </li>
          <li>
            <a href="#about" className="nav-link about">About</a>
          </li>
          <li>
            <a href="#skills" className="nav-link skills">Skills</a>
          </li>
          <li>
            <a href="#projects" className="nav-link projects">Projects</a>
          </li>
          <li>
            <a href="#contact" className="nav-link contact">Contact</a>
          </li>
          <DIV>
            <li>
              {/* <a id="resume-link-1" className="nav-link resume" href="https://drive.google.com/uc?export=download&id=11fP0CF_NP8LQWnL31o5lFVZAyDsDsx5y" target="_blank" download>
                Resume
              </a> */}

              <a  id="resume-link-1" className="nav-link resume" href="https://drive.google.com/uc?export=download&id=11fP0CF_NP8LQWnL31o5lFVZAyDsDsx5y" target="_blank" download> 
                 <div onClick={()=>{
                    window.open("https://drive.google.com/file/d/11fP0CF_NP8LQWnL31o5lFVZAyDsDsx5y/view?usp=sharing")
                  }}> Resume </div>
              </a>
            </li>
          </DIV>
        </ul>
      </div>
    </nav>
  );
};

// https://drive.google.com/file/d/11fP0CF_NP8LQWnL31o5lFVZAyDsDsx5y/view?usp=sharing
const DIV = styled.div`
  
`


// className={styles.resumebtn}