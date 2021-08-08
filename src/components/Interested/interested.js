import React from 'react';
import './interested.css';
import { AiFillLinkedin } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Interested = ( {handleMouseOver, handleMouseOut , contactReveal}) =>{
    let history = useHistory();
    return(
        <section className="interested">
                <Fade up distance="10%">
                <div className="interested-center"  >
                <h6>Ready to push your brand?</h6>
                <p id="popup-btn" onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut}>Feel free to drop a message 
               
                <div className="contact-reveal" style={{display:"block", opacity: 0}} ref ={contactReveal}>
                    <span onClick={() =>history.push("/contact")}>Drop a message directly</span>
                    <span onClick={() => window.location.href = `mailto:prateekshrmprateek@gmail.com`}>Email with mail client</span>
                </div>
                 </p>
                
                </div>
                </Fade>
                <Fade up distance="10%" delay={200}>
                <div className="social-wrapper">
                    <div>Find me on</div>
                    <a href="https://www.linkedin.com/in/prateek-sharma-b97932145/" target="_blank"> <AiFillLinkedin className="social-link" style={{width: "42px", height: "42px",marginRight: ".3rem"}}/></a>
                    <a href="https://www.instagram.com/prateek.sharma._/" target="_blank"><FaInstagramSquare  className="social-link" style={{width: "39px", height: "39px"}}/></a>
                </div>
                </Fade>
            </section>
    )
}
export default Interested;
