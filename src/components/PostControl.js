import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPostForm from "./EditPostForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleUpVoting = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "UPVOTE_POST",
      id: id,
    };
    dispatch(action);
    this.setState({ selectedPost: null });
  };
  
  handleDownVoting = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DOWNVOTE_POST",
      id: id,
    };
    dispatch(action);
    this.setState({ selectedPost: null });
  };

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, username, subject, description, votes, time } = newPost;
    const action = {
      type: "ADD_POST",
      id: id,
      username: username,
      subject: subject,
      description: description,
      votes: votes,
      time: time
    };
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  };

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_POST",
      id: id,
    };
    dispatch(action);
    this.setState({ selectedPost: null });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, username, subject, description, votes, time } = postToEdit;
    const action = {
      type: "ADD_POST",
      id: id,
      username: username,
      subject: subject,
      description: description,
      votes: votes,
      time: time
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditPostForm
          post={this.state.selectedPost}
          onEditPost={this.handleEditingPostInList}
        />
      );
      buttonText = "Return to Freddit";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = (
        <PostDetail
          post={this.state.selectedPost}
          onClickingDelete={this.handleDeletingPost}
          onClickingEdit={this.handleEditClick}
          onClickingUpVote = {this.handleUpVoting}
          onClickingDownVote = {this.handleDownVoting}
        />
      );
      buttonText = "Return to Freddit";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      );
      buttonText = "Return to Freddit";
    } else {
      currentlyVisibleState = (
        <PostList
          postList={this.props.mainPostList}
          onPostSelection={this.handleChangingSelectedPost}
        />
      );
      buttonText = "Create Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  mainPostList: PropTypes.object
};

const mapStateToProps = (state) => {
  
  // var size = Object.keys(state).length;
  // if ( size > 1){
  // const obj = [...Object.values(state)];
  // obj.sort((a,b) => a.obj.key.votes - b.obj.key.votes);
  // }

  return {
    mainPostList: state,
  };
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
