import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineFilePdf, AiOutlineInstagram } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
//assest
import boyMac from '../../assets/boyMac.jpg';
import Profile from '../../assets/profile.jpg';
import CV from '../../assets/CV-Prateek.pdf';
import './about.css';
const About = (props) =>{
    var mine ="< Hi, I'm Prateek >"
    return(
        <section className="About" >
                <div id="details" onAnimationEnd={props.autoScroll} >
                    <div className="aboutContainer" >
                        <div className="aboutWrapper">
                            <div className="textArea" ref={props.getting} >

                                <h1 style={{marginLeft: "-3.7rem"}}>{mine}</h1>
                                <p>I am passionate about building excellent applications</p>
                                <p> that improves the lives of those around me. Currently </p>
                                <p> working as a Software Engineer at  </p>
                                <p> PlanetSpark</p>


                                <div className="downloadResume">
                                    <h3>Let's Connect</h3>
                                    <div className="links"  >
                                        <GrMail className="link" size='2.2em' onClick={() => window.location.href = `mailto:prateekshrmprateek@gmail.com`} />
                                        <AiFillGithub className="link" size='2.2em' onClick={() => props.openInNewTab('https://github.com/prateek0411999')} />
                                        <AiFillLinkedin className="link" size='2.2em' onClick={() => props.openInNewTab('https://www.linkedin.com/in/prateek-sharma-b97932145/')} />
                                        <AiOutlineInstagram className="link" size='2.2em' onClick={() => props.openInNewTab('https://www.instagram.com/prateek.sharma._/')} />
                                        <AiOutlineFilePdf className="link" size='2.2em' onClick={() => window.open(CV, '_blank')} />
                                    </div>
                                </div>

                            </div>
                            <div className="image"  >

                                <img src={Profile} />

                            </div>
                            <div className="image2" >
                                <img src={boyMac} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default About;
