import React from "react";
import "./upload.css";

class UploadImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: "",
			location: "",
			Author_name: "",
			disable: true,
			fileName: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);

		this.fileInput = React.createRef();
	}

	handleClick(event) {
		event.preventDefault();
		this.fileInput.current.click();
	}

	handleChange(event) {
		if (event.target.name !== "file") {
			this.setState({ [event.target.name]: event.target.value });
			if (
				this.state.Author_name &&
				this.state.location &&
				this.state.description
			) {
				this.setState({ disable: false });
			} else this.setState({ disable: true });
		} else {
			let name = event.target.value.split("\\");
			this.setState({ fileName: name[name.length - 1] });
		}
	}

	async handleSubmit(event) {
		var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
		if (allowedExtensions.exec(this.fileInput.current.files[0].name)) {
			const formData = new FormData();
			formData.append("author", this.state.Author_name);
			formData.append("location", this.state.location);
			formData.append("description", this.state.description);
			formData.append("image", this.fileInput.current.files[0]);
			alert(this.state.Author_name);
			await fetch("http://localhost:9000/posts", {
				method: "POST",
				body: formData,
			})
				.then((response) => response.json())
				.catch((error) => {
					console.error("Error:", error);
				});
		} else {
			event.preventDefault();
			alert("Error: File Not Supported");
		}
	}
	render() {
		return (
			<div className="box">
				<form onSubmit={this.handleSubmit}>
					<table className="tab1">
						<tr>
							<td colSpan="3">
								<label>
									<input
										type="text"
										disabled="true"
										className="text-height"
										placeholder="No file chosen"
										value={this.state.fileName}
										style={{ width: "374px" }}
									/>
									<input
										type="file"
										ref={this.fileInput}
										name="file"
										className="file-btn"
										onChange={this.handleChange.bind(this)}
									/>
									<button
										onClick={this.handleClick.bind(this)}
										className="fake-btn"
									>
										Browse
									</button>
								</label>
							</td>
						</tr>
						<tr>
							<td className="tdAuthLoc">
								<input
									type="text"
									placeholder="Author"
									className="text-height"
									name="Author_name"
									value={this.state.Author_name}
									onChange={this.handleChange.bind(this)}
								/>
							</td>
							<td></td>
							<td>
								<input
									type="text"
									placeholder="Location"
									className="text-height"
									name="location"
									value={this.state.location}
									onChange={this.handleChange.bind(this)}
								/>
							</td>
						</tr>
						<tr>
							<td colSpan="3">
								<input
									type="text"
									placeholder="Description"
									name="description"
									className="text-height"
									value={this.state.description}
									onChange={this.handleChange.bind(this)}
									className="description1"
								/>
							</td>
						</tr>
						<tr>
							<td className="btn-submit" colSpan="3">
								<input
									type="submit"
									value="Post"
									className="btn-submit"
									disabled={this.state.disable}
								/>
							</td>
						</tr>
					</table>
				</form>
			</div>
		);
	}
}

export default UploadImage;
