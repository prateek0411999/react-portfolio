import React, { useEffect, useState, useRef } from 'react';

//icons
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiTypescript, SiRedux, SiMaterialUi, SiHeroku, SiNetlify, SiJenkins, SiSpring, SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejsSmall, DiJava, DiMysql, DiMongodb, DiPython, DiDjango, DiNpm, DiAngularSimple, DiSass, DiGit, DiAws } from "react-icons/di"
import { FaReact, FaDocker, FaBootstrap } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
//toastify
import { ToastContainer, toast } from 'react-toastify';
import './main.css';
import _ from 'lodash';

import { scroller } from "react-scroll";
//all-components
import Navigation from '../Navigation/navigation';
import Project from '../Projects/project';
import About from '../About/about';
import Experience from '../WorkExp/workExperience';

import Interested from '../Interested/interested';

//react-card-flip
import ReactCardFlip from 'react-card-flip';
import Lottie from '../lottie/lottie';
import back from '../lottie/back.json'

const size = ['0', '1', '2', '3', '4', '5'];

const Main = () => {

    const [pos, setPos] = useState('');
    const [showSections, setShowSections] = useState(false);
    const [runLine, setrunLine] = useState(false);
    const [bgColor, setbgColor] = useState('white');
    const [bgColor1, setbgColor1] = useState('black');
    const [isHovered, setIsHovered] = useState(false);
    const [optionChoosen, setOptionChoosen]=useState(0);
    const [isFlipped, setIsFlipped]=useState(false);
    const [color, setColor] = useState('black');
    const [loop, setloop] = useState(false);
    const [autoplay, setAutoplay] = useState(false);
    const [isStopped, setIsStopped] = useState(true);
    const[toggle, setToggle]=useState(false);

    const showNav =()=>{
    setToggle(!toggle);
    }

    const scrollToSection = (val) => {
        console.log('value we are getting',val)
        if(val === 1)
        {
            scroller.scrollTo("About", { delay: 0, smooth: "ease"});
        }
        else if (val === 2)
        {
            setShowSections(true);
            scroller.scrollTo("HW", {delay: 0, smooth: "ease"});
        }   
    };
    const autoScroll = () => {

        setShowSections(true);
        scrollToSection();

    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const toggleHover = () => {
        console.log("@@@@@@@@@@@@@@@@@@@@")
        setIsHovered(!isHovered);
    }
    const listenToScroll = () => {

        if (window.scrollY >= 1100) {
            setbgColor('black');
            setColor('grey');
            setrunLine(false);
        }
        if (window.scrollY <= 1100) {
            setbgColor('white')
            setColor('black')
            setrunLine(false);
        }
        if (window.scrollY > 1620) {
            setbgColor1('white')

        }
        if (window.scrollY < 1620) {
            setbgColor1('black')
        }

        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height;
        var getting = document.getElementById("details")

        if (scrolled >= 0.304) {
            getting.classList.add('details-animate');

        } else if (scrolled < 0.001) {

            getting.classList.remove('details-animate');
            setShowSections(false);
            getting.classList.add('details-animate-reverse')
        }
        setPos({ scrolled })
    }
    const cardClicked =(value)=>{
        if(value=='1')
        {
            setIsFlipped(true);
            setOptionChoosen(1);
        }
        else{
            setIsFlipped(true);
            setOptionChoosen(2);
        }

    }
    const cardBackButton =() =>{
        setIsFlipped(false);
    }

    const contactReveal = useRef(null);
    const handleMouseOver = () => {
      contactReveal.current.style.opacity=1;
      contactReveal.current.style.transform= "translate3d(0px, 0px, 0)";
     

    };
  
    const handleMouseOut = () => {
        contactReveal.current.style.opacity=0;
        contactReveal.current.style.transform= "translate3d(0px, -10px, 0)";
     
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        
        return () => {
            window.removeEventListener('scroll', listenToScroll);
      
          };
    }, []);


    return (

        <div style={{ position: 'relative', overflowX: 'hidden' }} >


            <ToastContainer
                position="bottom-right"
                autoClose={1200}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
            
            <Navigation
            scrollToSection={scrollToSection}
            toggleHover={toggle}
            showNav={showNav} />

            <About 
            autoScroll={autoScroll}
            openInNewTab={openInNewTab}
            />
            
            {showSections ?
                <section className="tech" style={{ backgroundColor: bgColor, color: color }}>
                    <div className="inverted-text" >
                        <Fade right distance="50%">
                        <p>TECH</p>
                        <p>NO</p>
                        <p>LOGY</p>
                        <p>I</p>
                        <p>LO</p>
                        <p>VE</p>
                        </Fade>
                    </div>
                    <div className="icons">
                        {!_.isEmpty(size) ? size.map((idx, item) =>
                            <div key={idx}>

                                <i aria-hidden="true"> <SiHeroku /></i>
                                <i aria-hidden="true"> <SiJenkins /></i>
                                <i aria-hidden="true"> <DiAngularSimple /></i>
                                <i aria-hidden="true"> <DiJava /></i>
                                <i aria-hidden="true"> <DiMongodb /></i>
                                <i aria-hidden="true"> <DiMysql /></i>
                                <i aria-hidden="true"> <DiNodejsSmall /></i>
                                <i aria-hidden="true"> <DiNpm /></i>
                                <i aria-hidden="true"> <DiPython /></i>
                                <i aria-hidden="true"> <FaBootstrap /></i>
                                <i aria-hidden="true"> <DiGit /></i>
                                <i aria-hidden="true"> <FaReact /></i>
                                <i aria-hidden="true"> <DiSass /></i>
                                <i aria-hidden="true"> <SiSpring /></i>
                                <i aria-hidden="true"> <SiRedux /></i>
                                <i aria-hidden="true"> <DiAws /></i>
                                <i aria-hidden="true"> <DiDjango /></i>
                                <i aria-hidden="true"> <SiMaterialUi /></i>
                                <i aria-hidden="true"> <IoLogoJavascript /></i>
                                <i aria-hidden="true"> <SiNetlify /></i>
                                <i aria-hidden="true"> <SiTypescript /></i>
                                <i aria-hidden="true"> <FaDocker /></i>
                                <i aria-hidden="true"> <AiFillHtml5 /></i>
                                <i aria-hidden="true"> <SiCss3 /></i>
                                <i aria-hidden="true"> <SiCplusplus /></i>


                            </div>
                        ) : null}

                    </div>

                </section> : null}
            {showSections ?
            <section className="project_work" id="HW">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div className="project_work_container">
                        <div className="pw-1" onClick={()=>cardClicked(1)}>
                            <h2 className="personal">Personal Projects</h2>
                        </div>
                        <div className="pw-2" onClick={()=>cardClicked(2)}>
                            <h2 className="exp">Work Experience</h2>
                        </div>

                    </div>
                    
                    <div className="back_container" >
                        <div className="back-button" onMouseEnter={() => setIsStopped(false)} onMouseLeave={() =>setIsStopped(true)} onClick={cardBackButton}>
                            <Lottie
                            autoplay={autoplay}
                            loop={loop}
                            animationData={back}
                            isStopped={isStopped}
                            />
                            <p>Back</p>
                        </div>
                    {optionChoosen === 1?
                        <Project 
                        openInNewTab={openInNewTab}
                        toggleHover={toggleHover}
                        isHovered={isHovered}   
                        />    
                : 
                    <Experience/>    
                    }
                    </div>
                </ReactCardFlip>
            </section>
            : null}
            {showSections ?
            <Interested
            toggleHover={toggleHover}
            isHovered={isHovered}
            contactReveal={contactReveal}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
               />
            : null}
        

        </div >
    )
}

export default Main
