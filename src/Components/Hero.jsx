import { Button } from "@mui/material";
import React from "react";
import video from '../assets/video.mp4';


function Hero() {
    return (
        <div className="bgContainer">
            <div className="overlay"></div>
                <video src={video} autoPlay loop muted />
         
                <div className="container">
                <h2 className="wlc">GLASS RECYCLING DEPENDS ON YOU</h2>
                <Button color="primary" variant="contained">
                    Learn More
                </Button>
                
                </div>
        </div>
        

        
    );
}

export default Hero;