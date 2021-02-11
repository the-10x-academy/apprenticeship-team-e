import React from "react";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

function UploadHeader() {
	return (
		<div>
			<div className="Header">
				<div>
					<img className="icon" src="../img/icon.png" alt="icon"></img>
					<text className="Insta">Instaclone</text>
				</div>
				<div>
					<Link to="/posts/upload">
						<img className="camera" src="../img/camera.png" alt="camera"></img>
					</Link>
				</div>
			</div>
		</div>
	);
}
export default UploadHeader;
