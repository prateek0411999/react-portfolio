import React,{Component} from 'react'
import Lottie from 'react-lottie';
import copied from './copied.json';
 
const LottieControl = (props)=> {
  const buttonStyle = {
    display: 'block',
    margin: '10px auto'
  };

  const defaultOptions = {
    loop: props.loop,
    autoplay: props.autoplay, 
    animationData: props.animationData,
    
  };

  
    return (
       <div >
      <Lottie options={defaultOptions}
              height="50px"
              width="150px"
              isStopped={props.isStopped}
              />
      
    </div>
    );
  }
export default LottieControl