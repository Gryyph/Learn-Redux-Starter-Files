import React from 'react'
import Photo from './photo'
import Comments from './comments'

const Single = React.createClass({
  render() {
    //need index of the post and the post inself

    const i = this.props.posts.findIndex((post ) => post.code === this.props.params.postId);
    //console.log(i);
    const post = this.props.posts[i];
    const postComments = this.props.comments[this.props.params.postId] || []
    return (
      <div className = "single-photo">
       <Photo i = {i} post={post} {...this.props} />
       <Comments postComments = {postComments}{...this.props}/>
      </div>

      
    )
  }
});


export default Single;