import React,{useEffect, useState} from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineFilePdf, AiOutlineInstagram } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import CV from '../../assets/CV-Prateek.pdf';
import { GrMail } from "react-icons/gr";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import Fade from 'react-reveal/Fade';
import Lottie from '../lottie/lottie';
import back from '../lottie/back.json'
import './contact.css';
import axios from '../../api/axios';
import _ from 'lodash';

const Contact=(props)=> {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors,setErrors] = useState({});
    const [isStopped, setIsStopped] = useState(true);
    let history = useHistory();
    const handleChange =(evt)=>{
        setFormData({...formData, [evt.target.name] : evt.target.value });
    }
    const sendFormData =()=>{
        console.log('setting form data',formData)
        if(validateForm())
        {
            axios.post('/send',formData)
            .then((response)=>{
                toast.success("Your message has been sent");
            })
            .catch((error)=>{
                toast.error("Error occured when sending the message");
            })
            
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
        }else
        {
            console.log('inside elseeee',errors)
                if(!_.isEmpty(errors))
                {
                for(var key of Object.keys(errors.errors))
                {
                    console.log('!!!!!!',errors.errors[key]);
                    toast(errors.errors[key]);
                }
            }
            else{
                toast("Please fill the inputs first");
            }
        }
    }
    const validateForm =() =>{
      let fields = formData;
      let errors = {};
      let formIsValid = true;

      if (!fields["firstName"]) {
        formIsValid = false;
        errors["firstName"] = "*Please enter your first name.";
      }

      if (typeof fields["firstName"] !== "undefined") {
        if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["firstName"] = "*Please enter alphabet characters only.";
        }
      }
      if (!fields["lastName"]) {
        formIsValid = false;
        errors["lastName"] = "*Please enter your last name.";
      }

      if (typeof fields["lastName"] !== "undefined") {
        if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["lastName"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email-ID.";
      }
      console.log('@#@#@@@#@#@#@#',fields["email"])

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }
      console.log('@@@@@@',errors);
      setErrors({ errors : errors });
      return formIsValid;
    }


    return(
        <div>
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
            
    <section className="contact">
        {console.log(formData , errors)}
        <div className="container">
            <Fade down distance="50%">
            <div className="contactinfo">
                <div>
                    <h2> Contact Info</h2>
                    <ul className="info">
                    <Fade up distance="50%" delay={500}>
                        <li>
                            <span><p><FaAddressBook size='1.5em'/></p></span>
                            <span>House No: 349/7, Panipat, Haryana (132103), India.</span>
                            
                        </li>
                        </Fade>
                        <Fade up distance="50%" delay={600}>
                        <li>
                      
                            <span><p><AiOutlineMail size='1.5em'/></p></span>
                            <span>prateekshrmprateek@gmail.com</span>  
                            
                        </li>
                        </Fade>
                        
                    </ul>
                    </div>
             
                    <ul className="sci">
                    <Fade left distance="50%" delay={700}>
                        <li><a href="https://github.com/prateek0411999" target="_blank"><p><AiFillGithub size='2em' /></p></a></li>
                        <li><a href="https://www.linkedin.com/in/prateek-sharma-b97932145/" target="_blank"><p><AiFillLinkedin size='2em' /></p></a></li>
                        <li><a href="https://www.instagram.com/prateek.sharma._/" target="_blank"><p><AiOutlineInstagram size='2em' /></p></a></li>
                        <li><span onClick={() => window.open(CV, '_blank')}><p><AiOutlineFilePdf size='2em' /></p></span></li>
                        <li><span  onClick={() =>history.push("/")}><p><RiArrowGoBackLine size='2em' /></p></span></li>
                    </Fade>
                    </ul>
                
            </div>
            </Fade>
            <Fade right distance="50%">
            <div className="contactForm">
            <div className="back-button" onMouseEnter={() => setIsStopped(false)} onMouseLeave={() =>setIsStopped(true)}  onClick={() =>history.push("/")}>
                            <Lottie
                            autoplay={false}
                            loop={false}
                            animationData={back}
                            isStopped={isStopped}
                            />
                            <p>Back</p>
                        </div>
                <h2>Get in Touch</h2>
                <Fade up distance="8%" delay={600}>
                <div className="formBox">
                    <div className="inputBox w50">
                        <input type="text" name="firstName" onChange={(e)=>handleChange(e)} value={formData.firstName} required />
                        <span>First Name</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="lastName"onChange={(e)=>handleChange(e)} value={formData.lastName} required />
                        <span>Last Name</span>
                    </div>
                    <div className="inputBox w50">
                        <input type="text" name="email" onChange={(e)=>handleChange(e)} value={formData.email} required />
                        <span>Email </span>
                    </div>
                    <div className="inputBox w100">
                        <textarea name="message" onChange={(e)=>handleChange(e)} value={formData.message} required></textarea>
                        <span>Write your message here</span>
                    </div>
                    <div className="inputBox w100">
                        <button className="sbmtbtn" onClick={()=> sendFormData()} >Send</button>    
                    </div>

                </div>
                </Fade>
            </div>
            </Fade>
        </div>
    </section>
    </div>)
}

export default Contact;