import React from "react";
import "./HeaderComponent.css";
import {Link} from "react-router-dom";



function UploadHeader(){
    return (
    <div>
        <div className = "Header">
        <img className = "icon" src = "./img/icon.png" id = "icon" alt="icon"></img>
        <text className="Insta">Instaclone</text>
        <Link to="/posts/upload"><img className = "camera" src="./img/camera.png" id="camera" alt="camera"></img></Link>
        </div >
        </div>

    );
}
export default UploadHeader;