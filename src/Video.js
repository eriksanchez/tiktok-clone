import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from "./VideoFooter"
import VideoSidbar from "./VideoSidebar"
function Video({url,channel, description,song,likes,messages,shares}) {
    
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
            src={url}
            onClick={handleVideoPress}>
            </video>
        <VideoFooter channel={channel} description={description} song={song}/>
        <VideoSidbar likes={likes} shares={shares} messages={messages}/>    
        </div>
    ) 
}

export default Video
