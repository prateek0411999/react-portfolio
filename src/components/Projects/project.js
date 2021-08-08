import React, { useEffect, useState, useRef } from 'react';
import Memories from '../../assets/memories.jpg';
import Worker from '../../assets/worker.jpg';
import UG from '../../assets/ug.jpg';
import PD from '../../assets/pd.webp';
import Fade from 'react-reveal/Fade';
import { GoLinkExternal } from "react-icons/go";
import { BiSquare } from 'react-icons/bi';
import './project.css';
const Project = (props) =>{
    return(
        <section className="projects" >
                    <div className="projects-container">
                        <div className="projects-heading" >
                            <h1 >Projects</h1>
                            <p>Here are some of my personal projects</p>
                        </div>

                        <div class="project-stack">

                            <div class="project-stack__card" >

                               
                                    <div className="project-image">
                                    <Fade up distance="50%">
                                    <img src={Memories} />
                                    </Fade>
                                    </div>
                                
                                {/* duration={2000} for putting delay 1000 is the default one*/}
                            
                                    <div className="project-card-textarea">
                                        <Fade up duration={500} distance="50%">
                                        <h1 style={{cursor: 'pointer'}} onClick={() => props.openInNewTab('https://github.com/prateek0411999/MERN-Auth---JWT-Google-OAuth')} >Memories</h1>
                                        </Fade>
                                        <Fade up duration={1000} distance="50%">
                                        <p>Memories is a social media application that allows users to post interesting things happened in their lives, It allows users to make use of their google account to sign up or sign in directly on a single click of button</p>
                                        <h6>Design and Development - Prateek Sharma</h6>
                                        <div className="button_slide slide_right" onMouseEnter={props.toggleHover} onMouseLeave={props.toggleHover} onClick={() => props.openInNewTab('https://memoriesapp02.netlify.app/')}>See the live App <span style={{paddingLeft: ".6rem"}}>{props.isHovered ? <GoLinkExternal /> : <BiSquare />}</span> </div>
                                        </Fade>
                                    </div>
                                
                            </div>


                            <div class="project-stack__card1" >
                                
                                    <div className="project-card-textarea1">
                                    <Fade up duration={500} distance="50%">
                                        <h1>Unified Games</h1>
                                        </Fade>
                                        <Fade up duration={1000} distance="50%">
                                        <p>Unified games provide rookie gamers with an overview of today's
                                        most popular titles and provides them with the best FPS guide so
                                        that they can boost their in-game frames. It also offers one to one
                                        FPS coaching for gamers of all skill levels across their beloved game
                                    and even allows them to dispense fps coaching</p>
                                        <h6>Design and Development - Prateek Sharma</h6>
                                        <div className="button_slide slide_right" onMouseEnter={props.toggleHover} onMouseLeave={props.toggleHover} onClick={() => props.openInNewTab('https://github.com/prateek0411999/Unified-Games')}>See it on Github <span>{props.isHovered ? <GoLinkExternal /> : <BiSquare />}</span> </div>
                                        </Fade>
                                    </div>
                                
                               
                                    <div className="project-image">
                                    <Fade up distance="50%">
                                    <img src={UG} />
                                    </Fade>
                                    </div>
                                
                            </div>

                            <div class="project-stack__card" >
                               
                                    <div className="project-image">
                                    <Fade up distance="50%">
                                    <img src={Worker} />
                                    </Fade>
                                    </div>
                                
                                
                                    <div className="project-card-textarea">
                                    <Fade up duration={500} distance="50%">
                                        <h1>Worker's Paradise</h1>
                                        </Fade>
                                        <Fade up duration={1000} distance="50%">
                                        <p>This project is a web based application that provides home services like (Carpenter, Electrician to a tuitor) to the people. It provides all the required features that an Ecommerce web application should have. It allows users to list their own business as per their requirement, provides functionality to place orders, check orders status etc </p>
                                        <h6>Design and Development - Prateek Sharma</h6>
                                        <div className="button_slide slide_right" onMouseEnter={props.toggleHover} onMouseLeave={props.toggleHover} onClick={() => props.openInNewTab('https://github.com/prateek0411999/Workers-Paradise')}>See it on Github <span>{props.isHovered ? <GoLinkExternal /> : <BiSquare />}</span> </div>
                                        </Fade>
                                    </div>
                                
                            </div>
                            <div class="project-stack__card1" >
                                
                                    <div className="project-card-textarea1">
                                    <Fade up duration={500} distance="50%">
                                        <h1>Parkinson's Disease Prediction</h1>
                                        </Fade>
                                        <Fade up duration={1000} distance="50%">
                                        <p>The project deals with the prediction of Parkinson's disease amoung humans. it involves the concept of machine learning models like KNN, SVM, KMeans Algorithm and Logistic Regression etc and sklearn libraries to predicts the same </p>
                                        <h6>Design and Development - Prateek Sharma</h6>
                                        </Fade>
                                    </div>
                                
                                    <div className="project-image">
                                    <Fade up distance="50%">
                                    <img src={PD} />
                                    </Fade>
                                    </div>
                            </div>


                        </div>

                    </div>
                </section>
    )
}
export default Project;
