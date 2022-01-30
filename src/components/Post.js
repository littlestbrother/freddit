import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.subject} - {props.username}</h3>
        <p><em>{props.description}</em></p>
        <p>Votes: {props.votes}</p>
        <p>Time: {props.time}</p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  username: PropTypes.string,
  subject: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  votes: PropTypes.number,
  time: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;