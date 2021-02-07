import React from "react";
import ReactDOM from "react-dom";
import image from './Components/images/mnit.jpg'
import "./index.css";
import App from "./Components/post/posts";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App author='mitesh' location="delhi" filePath={image} date="6 feb 2021" description="first thing" />
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
