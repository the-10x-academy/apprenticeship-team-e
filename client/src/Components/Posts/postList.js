import React from 'react';
import postView from "./postView";
import './post.css';
class Postlistpage extends React.Component{
  constructor(){
    super()
    this.state={posts:[]}
  }
  componentDidMount(){
    console.log('component did mount')
    fetch('http://localhost:9000/posts')
    .then(res=>{
      //console.log(res);
      return res.json()
    })
    .then(posts=>{
      //console.log(students);
      this.setState({posts:posts.model})
    })
    console.log(this.state.posts.model)
  }
  render(){
    console.log(this.state.posts)
    return(
      <div className='Landingpage_div' >
        <ul>
          {this.state.posts.map((post,id)=>(
            <postView name={this.state.posts[id].name} location={this.state.posts[id].location} message={this.state.posts[id].message} likes={this.state.posts[id].likes}
            date={this.state.posts[id].date} imagepath={this.state.posts[id].imagepath} /> 
          ))}
        </ul>
    </div>
    )
  }
}
export default Postlistpage;