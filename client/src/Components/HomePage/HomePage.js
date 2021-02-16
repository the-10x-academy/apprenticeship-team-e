// import logo from "../../logo.svg";
import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
	render() {
		return (
			<div className="Home">
				<img className="pad" src="./img/lens-1418954.png" alt="Home" />
				<div className="txtBtn">
					<text className="txt">10x Team E</text>
					<div className="btn">
						<Link to="/getposts" style={{ textDecoration: "none" }}>
							<button type="button" className="enter">
								Enter
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
