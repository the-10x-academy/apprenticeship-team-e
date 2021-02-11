import React from "react";
import heart from "./heart.png";
import share from "./share.png";
import "./post.css";
// import header

function postView(props) {
	return (
		<div className="post_all">
			<div className="post_box">
				<div className="post_header">
					<h1 className="post_name">{props.author}</h1>
					<h1 className="post_location">{props.location}</h1>
				</div>

				{/* {/* <img
					className="MoreIcon"
					src="/moreIcon.png"
					alt="moreIcon" 
					 */}
				<div className="image">
					<img src={"http://localhost:9000/" + props.filePath} alt="Post" />
				</div>
				<div className="post_like_share">
					<input type="image" src={heart} alt="" className="post_like" />
					<input type="image" src={share} alt="" className="post_share" />
					<h1 className="post_date">{props.date}</h1>
				</div>
				<div className="post_caption_likesCount">
					<h1 className="likes">64 likes</h1>
					<h1 className="caption">{props.description}</h1>
				</div>
			</div>
		</div>
	);
}
export default postView;
