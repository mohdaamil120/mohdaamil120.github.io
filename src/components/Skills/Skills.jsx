import React from "react";
import styles from "./Skills.module.css";
import h from "../../assets/H.png"
import c from "../../assets/c.png"
import j from "../../assets/j.png"
import r from "../../assets/react.png"
import re from "../../assets/re.png"
import ts from "../../assets/ts.png"
import n from "../../assets/nj.png"
import e from "../../assets/ex.png"
import m from "../../assets/mongodb.png"
import a from "../../assets/at.png"
import mo from "../../assets/mongoose.png"
import ch from "../../assets/ch.png"
import g from "../../assets/github.png"
import styled from "styled-components";

const stack = [
    {
      title: "HTML",
      imageSrc: h
    },
    {
      title: "CSS",
      imageSrc: c
    },
    {
      title: "JavaScript",
      imageSrc: j
    },
    {
       title: "React",
      imageSrc: r
    },
    {
      title: "Redux",
      imageSrc: re
    },
    {
      title: "TypeScript",
      imageSrc: ts
    },
    {
      title: "NodeJs",
      imageSrc: n
    },
    {
      title: "Express",
      imageSrc: e
    },
    {
      title: "MongoDB",
      imageSrc: m
    },
    {
      title: "MongoDB Atlas" ,
      imageSrc: a
    },
    {
      title: "Mongoose" ,
      imageSrc: mo
    },
    {
      title: "Chakra UI" ,
      imageSrc: ch
    },
    {
      title: "Github" ,
      imageSrc: g
    }
  ]

export const Skills = () => {
  return (
    <DIV>
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {stack.map((skill, id) => {
            return (
              <div key={id} className="skills-card">
                <div className={styles.skillImageContainer}>
                  <img className="skills-card-img" src={skill.imageSrc} alt={skill.title} />
                </div>
                <p className="skills-card-name">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </DIV>
  );
};


const DIV = styled.div`
  .skills-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11px;
  }
  
  .skills-card p{
    font-size: 25px;
    font-family: var(--font-roboto);
    font-weight: 500;
    /* margin-left: 40px; */
  }


`


// className={styles.skill}