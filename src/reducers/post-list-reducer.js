export default (state = {}, action) => {
  const { username, subject, description, votes, time, id } = action;
  switch (action.type) {
    case "ADD_POST":
      return Object.assign({}, state, {
        [id]: {
          username: username,
          subject: subject,
          description: description,
          votes: votes,
          id: id,
          time: time,
        },
      });

    case "DELETE_POST":
      const newState = { ...state };
      delete newState[id];
      return newState;

    case "UPVOTE_POST":
      const newState2 = { ...state };
      newState2[id].votes++;
      return newState2;

      
    case "DOWNVOTE_POST":
      const newState3 = { ...state };
      newState3[id].votes--;
      return newState3;
    default:
      return state;
  }
};
