import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from "./VideoFooter"
function Video() {
    
    const[playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () =>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }else{
            videoRef.current.play();
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            <video className="video_player" 
            loop 
            ref={videoRef} 
            src="https://youtu.be/xkGNEijWWGU"
            onClick={handleVideoPress}>
            </video>
        <VideoFooter/>
        {/**Video Footer */}
        {/**Video Sidebar */}
            </div>
    )
}

export default Video
