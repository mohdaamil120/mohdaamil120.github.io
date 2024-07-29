import React from "react";

import styles from "./Projects.module.css";
import Tr from "../../assets/Travello.png"
import Ho from "../../assets/MediPulse.png"
import T from "../../assets/TripWiz.png"
import VolNow from "../../assets/VolNow.png"

import { ProjectCard } from "./ProjectCard";
import styled from "styled-components";


export const Projects = () => {
  return (<>
  <DIV>
    <h2 className="title">Projects</h2>
    <section className="container" id="projects">
      <div className="project-card" >
        <div>
            <img src={Tr} alt="logo" />
        </div>
        <div className="desc" >
            <h3  className="project-title" style={{color:"lightblue"}}># Project 1</h3>
            <h1 className="project-title">Travello</h1>
            <p className="project-description">Travello is your ultimate travel companion, offering seamless login, signup, search, and filtering options. Discover dream destinations, connect with like-minded travelers, and share experiences in a vibrant community. Unleash your wanderlust and embark on unforgettable adventures with Travello.</p>
            <div className="project-tech-stack" id="stack" style={{display:"flex",gap:"10px",margin:"10px 0px", flexWrap:"wrap"}}>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>HTML</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>CSS</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>Javascript</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>JSON Server</p>
            </div>
            <div  className="btndiv">
                <button className="project-deployed-link" style={{fontSize:"20px",padding:"5px 20px",borderRadius:"5px"}}><a target="_blank" href="https://sensational-starship-6bc092.netlify.app/">Live</a></button>
                <button className="project-github-link"  style={{fontSize:"20px",padding:"5px 20px",borderRadius:"5px"}}><a target="_blank" href="https://github.com/mohdaamil120/Travello-Destination-booking-">Github</a></button>
            </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="project-card" >
        <div className="desc" >
            <h3 className="project-title" style={{color:"lightblue"}}># Project 2</h3>
            <h1 className="project-title">MediPules Hospital</h1>
            <p className="project-description">MediPulse is a doctor consultation and appointment booking website. Experiencing the website we can book doctors in the different cities within the variety of different departments by using the filter and sorting. In this way, the website can be easily navigated according to our needs.</p>
            <div className="project-tech-stack" id="stack" style={{display:"flex",gap:"10px",margin:"10px 0px", flexWrap:"wrap"}}>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>HTML</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>CSS</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>Javascript</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>JSON Server</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>React</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>Redux</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>Chakra UI</p>
            </div>
            <div  className="btndiv">
                <button className="project-deployed-link" style={{fontSize:"20px",padding:"5px 20px",borderRadius:"5px"}}><a target="_blank" href="https://vogue-pocket-8479-8gpxiyi3q-mohdaamil120.vercel.app/">Live</a></button>
                <button className="project-github-link"  style={{fontSize:"20px",padding:"5px 20px",borderRadius:"5px"}}><a target="_blank" href="https://github.com/mohdaamil120/MediPulse-Hospital">Github</a></button>
            </div>
        </div>
        <div>
            <img src={Ho} alt="logo" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="project-card" >
        <div>
            <img src={T} alt="logo" />
        </div>
        <div className="desc" >
            <h3 className="project-title" style={{color:"lightblue"}}># Project 3</h3>
            <h1 className="project-title">TripWiz</h1>
            <p className="project-description">About Welcome to Trip Wiz! Trip Wiz is your ultimate travel companion, designed to help you plan, organize, and make the most out of your trips. Whether you're a frequent globetrotter or just planning your next weekend getaway, Trip Wiz has got you covered.</p>
            <div className="project-tech-stack" id="stack" style={{display:"flex",gap:"10px",margin:"10px 0px", flexWrap:"wrap"}}>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>React</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>Redux</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>Javascript</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>JSON Server</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>Chakra UI</p>
            </div>
            <div  className="btndiv">
                <button className="project-deployed-link" style={{fontSize:"20px",padding:"5px 20px",borderRadius:"5px"}}><a target="_blank" href="https://651c28a7ddc84f33e8a86578--sunny-muffin-f03636.netlify.app/">Live</a></button>
                <button className="project-github-link"  style={{fontSize:"20px",padding:"5px 20px",borderRadius:"5px"}}><a target="_blank" href="https://github.com/mohdaamil120/TripWiz-Flights-and-Hotels-booking-app">Github</a></button>
            </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="project-card" >
        <div className="desc" >
            <h3 className="project-title" style={{color:"lightblue"}}># Project 4</h3>
            <h1 className="project-title">Volunteer-Now</h1>
            <p className="project-description">VOLNOW invites you to join a community dedicated to making a positive impact through volunteering. Our meticulously crafted web application is designed with a seamless blend of HTML, CSS, JavaScript, and React, offering you a gateway to a world of opportunities for meaningful contributions. Explore the following sections and embark on your journey of making a difference.</p>
            <div className="project-tech-stack" id="stack" style={{display:"flex",gap:"10px",margin:"10px 0px", flexWrap:"wrap"}}>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>HTML</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>CSS</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>Javascript</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>React</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>Redux</p>
                <p style={{borderRadius:"5px",padding:"5px",backgroundColor:"#000000"}}>Styled Components</p>
            </div>
            <div  className="btndiv">
                <button className="project-deployed-link" style={{fontSize:"20px",padding:"5px 20px",borderRadius:"5px"}}><a target="_blank" href="https://volunteer-now.vercel.app/">Live</a></button>
                <button className="project-github-link"  style={{fontSize:"20px",padding:"5px 20px",borderRadius:"5px"}}><a target="_blank" href="https://github.com/mohdaamil120/Volunteer-Now">Github</a></button>
            </div>
        </div>
        <div>
            <img src={VolNow} alt="logo" />
        </div>
      </div>
    </section>
    </DIV>
    </>
    );
};


const DIV =styled.div`


.container {
  margin-top: 76px;
  color: var(--color-text);
  margin-left: 10%;
  margin-right: 10%;
  background-color: #090F19;
  padding: 25px;
  border-radius: 15px;
}

.title {
  font-size: 35px;
  font-weight: 700;
  margin-top: 10%;
  margin-left: 10%;
  letter-spacing: 1.75px;
  text-transform: uppercase;
}



.project-github-link:hover{

    background-color: #10203d;
}

.project-deployed-link:hover{

    background-color: #10203d;
}

#stack{
    display:"grid";
    /* flex-direction: column; */
    grid-template-columns: repeat(4,1fr);
    gap:"10px";
    margin-left:"350px";
    margin-top:"20px";
    margin-bottom:"20px"
}

  .project-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
}

.project-card div{
    overflow: hidden;
}

.project-card div img{
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
}

.project-card div img:hover{
   width: 100%;
   /* transition: ease-in-out; */
   transform: scale(1.1);
}

.desc{
    text-align:"right"
}

.btndiv{
    display: flex;
    gap: 20px;
}

.project-github-link a{
    text-decoration: none;
    color: black;
}

.project-deployed-link a{
    text-decoration: none;
    color: black;
}

@media screen and (max-width:1050px) {
    .project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
}

.desc{
    font-size: smaller;
    width: 100%;
    padding: 0px;
    margin: 0px;
}

.desc p{
    padding: 0;
    margin: 0px;
}

#stack{
    padding: 0px;
    /* margin-right: 100px; */
    /* display: grid; */
}
#stack p{
    text-align: center;
}
}

`
