import React from "react";
import "./VideoPlayer.css";
import video from "../../assets/college-video.mp4";

const VideoPlayer = () => {
    return (
        <div className="video-background">
            <video className="video" src={video} autoPlay muted loop></video>
        </div>
    );
};

export default VideoPlayer;
