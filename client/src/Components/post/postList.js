import React from "react";
import postView from "./posts";
import "./post.css";
class Postlistpage extends React.Component {
	constructor() {
		super();
		this.state = { posts: [] };
	}
	componentDidMount() {
		console.log("component did mount");
		fetch("http://localhost:9000/posts")
			.then((res) => {
				//console.log(res);
				return res.json();
			})
			.then((posts) => {
				//console.log(students);
				this.setState({ posts: posts });
			});
		console.log(this.state.posts);
	}
	render() {
		console.log(this.state.posts);
		return (
			<div className="Landingpage_div">
				<ul>{this.state.posts.map((post) => postView(post))}</ul>
			</div>
		);
	}
}
export default Postlistpage;
