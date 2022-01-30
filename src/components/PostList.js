import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

function PostList(props){
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post)=>
        <Post
          whenPostClicked = { props.onPostSelection }
          username={post.username}
          subject={post.subject}
          votes={post.votes}
          formattedWaitTime={post.formattedWaitTime}
          time={new Date(post.time).toLocaleString("en-US")}
          id={post.id}
          key={post.id}/>
      )}
    </React.Fragment>
  );
}


PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;