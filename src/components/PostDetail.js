import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete, onClickingUpVote, onClickingDownVote } = props;
  
  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>{post.subject} by {post.username}</h3>
      <p><em>{post.description}</em></p>
      <p>Votes: {post.votes}</p>
      <p>{new Date(post.time).toLocaleString("en-US")}</p>
      <button onClick={() => onClickingUpVote(post.id)}>Up Vote</button>
      <button onClick={() => onClickingDownVote(post.id)}>Down Vote</button>
      <button onClick={ props.onClickingEdit }>Update Post</button>
      <button onClick={()=> onClickingDelete(post.id) }>Delete Post</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingUpVote: PropTypes.func,
  onClickingDownVote: PropTypes.func
};

export default PostDetail;