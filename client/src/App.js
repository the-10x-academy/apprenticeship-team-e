import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";
import Homepage from "./Components/HomePage/HomePage";
import postlist from "./Components/post/postlistPage";
import upload from "./Components/UploadPage/upload";
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/posts" component={postlist} />
				<Route exact path="/posts/upload" component={upload} />
			</Switch>
		</Router>
	);
}
export default App;
