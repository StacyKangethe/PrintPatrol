import React from "react";
import video from '../assets/video.mp4';


function Hero() {
    return (
        <div className="bgContainer">
            <div className="overlay"></div>
            <video src={video} autoPlay loop muted />
         
                
        </div>
        

        
    );
}


export default Hero;