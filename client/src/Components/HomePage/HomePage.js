// import logo from "../../logo.svg";
import React from "react";
import "./HomePage.css";

class HomePage extends React.Component {
	render() {
		return (
			<div className="Home">
				<img src="./img/lens-1418954.png" alt="Home" />
				<div className="txtBtn">
					<text>10x Team 04</text>
					<div className="btn">
						<button type="button" className="enter">
							Enter
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
