import React,{useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import TextLoop from "react-text-loop";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import './navigation.css';
const Navigation = (props) =>{
    let history = useHistory();
    return(
        <section id="init"   >
        <div className="navigation"  >
            <Fade down>
                <svg id="logo" width="86" height="60" viewBox="0 0 86 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.9891 25.8425L30.9893 25.8423C33.9918 23.158 35.5084 19.7686 35.5084 15.7419C35.5084 11.5867 33.9447 8.14499 30.8341 5.4988C27.7474 2.83312 23.3134 1.58065 17.6961 1.58065H2H1V2.58065V47.5484V48.5484H2H8.34821H9.34821V47.5484V29.7742H17.6961C23.4877 29.7742 27.9847 28.5268 30.9891 25.8425ZM48.7716 47.3709L48.7813 47.375L48.791 47.3789C51.4856 48.4664 54.499 49 57.8155 49C61.2832 49 64.3462 48.3762 66.9746 47.092C69.5714 45.8233 71.5837 44.1424 72.9554 42.0281C74.3105 39.9394 75 37.6873 75 35.2903C75 32.2936 74.2625 29.8024 72.6719 27.9363C71.1768 26.1403 69.371 24.8148 67.2617 23.9771C65.247 23.135 62.6175 22.3051 59.3899 21.4831C56.7606 20.8005 54.7271 20.2083 53.2773 19.7064C51.9693 19.1967 50.8662 18.4808 49.9536 17.5626C49.1841 16.745 48.77 15.6733 48.77 14.2581C48.77 12.2608 49.4837 10.809 50.8788 9.76966L50.8854 9.76479L50.8918 9.75981C52.3508 8.63544 54.282 8.03226 56.7691 8.03226C59.4519 8.03226 61.4945 8.6615 62.9932 9.82273L62.9994 9.82757L63.0057 9.83231C64.5666 11.0027 65.3562 12.2879 65.5446 13.6823L65.6617 14.5484H66.5356H73.5117H74.6241L74.506 13.4422C74.1029 9.66714 72.2968 6.61945 69.1457 4.35174C66.0494 2.08976 62.1064 1 57.397 1C54.1258 1 51.1772 1.53402 48.5697 2.626L48.5697 2.62598L48.5634 2.62867C45.9987 3.72339 43.9599 5.29394 42.491 7.35512C41.0147 9.42665 40.2823 11.8041 40.2823 14.4516C40.2823 17.4064 40.9966 19.8857 42.526 21.7879L42.5352 21.7994L42.5448 21.8106C44.0393 23.5613 45.8202 24.8636 47.8822 25.7007L47.8821 25.7008L47.8899 25.7038C49.9035 26.5019 52.5337 27.2887 55.7644 28.0682C58.3517 28.7092 60.3817 29.3013 61.8681 29.8428C63.2727 30.3545 64.4164 31.0916 65.3228 32.0442C66.141 32.904 66.582 34.0407 66.582 35.5484C66.582 37.4268 65.8454 38.9504 64.3061 40.1871C62.8185 41.3768 60.6949 42.0323 57.8155 42.0323C54.7952 42.0323 52.6464 41.3548 51.2179 40.1496C49.7733 38.8476 48.9681 37.2889 48.764 35.4387L48.6658 34.5484H47.77H41.0032H39.9841L40.0034 35.5674C40.0538 38.2244 40.8655 40.6036 42.4401 42.6705L42.4401 42.6706L42.4469 42.6793C44.0085 44.6825 46.1307 46.2402 48.7716 47.3709ZM24.8627 21.0437C23.4508 22.2405 21.1294 22.9355 17.6961 22.9355H9.34821V8.41935H17.6961C21.0295 8.41935 23.3442 9.09537 24.812 10.2785C26.2386 11.4285 27.0207 13.1858 27.0207 15.7419C27.0207 18.135 26.2687 19.8517 24.8627 21.0437Z" stroke="white" stroke-width="2" />
                </svg>
                <ul>
                    <li><a className="hover-line" onClick={() =>props.scrollToSection(1)} >About </a></li>
                    <li><a className="hover-line" onClick={() =>props.scrollToSection(2)} >Works</a></li>
                    <li><a className="hover-line" onClick={() =>history.push("/contact")}>Contact</a></li>
                </ul>
            </Fade>
        </div>
        <div className="center-box" >
            <Fade up>
                <h2>Looking For A Creative  </h2>
                <TextLoop className="textAnim" interval={2500} fade={true} children={["Full Stack Developer ? ", "Software Engineer ?"]} />
            </Fade>
            <p>You Do? Scroll down</p>

        </div>

        <div className="email" >

            <CopyToClipboard text="prateekshrmprateek@gmail.com"
                onCopy={() => toast("Copied To Clipboard")}>
                <p id="mail">prateekshrmprateek@gmail.com</p>
            </CopyToClipboard>

        </div>

        <div className="email1">
            <CopyToClipboard text="prateekshrmprateek@gmail.com"
                onCopy={() => toast("Copied To Clipboard")}>
                <p id="mail">prateekshrmprateek@gmail.com</p>
            </CopyToClipboard>

        </div>
        <svg id="linesvg" width="3" height="350" viewBox="0 0 3 485" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line id="logo" x1="1.5" y1="6.55671e-08" x2="1.49998" y2="485" stroke="grey" stroke-width="3" />
        </svg>

    </section>
    )
}
export default Navigation;
// style={{ backgroundColor: bgColor1, color: color }}