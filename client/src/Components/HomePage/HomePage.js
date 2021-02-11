// import logo from "../../logo.svg";
import React from "react";
import "./HomePage.css";
import {Link} from "react-router-dom";
// import postlist from '../post/postlistPage'

class HomePage extends React.Component {
	render() {
		return (
			<div className="layout">
				<img src="./img/lens-1418954.png" alt="Home" />
				<p>10x Team 04</p>
				<button type="button" className="enter">
					Enter
				</button>
			</div>
		);
	}
}

export default HomePage;
