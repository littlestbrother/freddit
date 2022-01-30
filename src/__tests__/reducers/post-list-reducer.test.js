import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;

  const currentState = {
    1: {username: 'Ryan & Aimen',
    subject: '4b',
    description: 'Redux action is not working correctly.',
    id: 1 },
    2: {username: 'Jasmine and Justine',
    subject: '2a',
    description: 'Reducer has side effects.',
    id: 2 }
  }

  const postData = {
    username: 'Ryan & Aimen',
    subject: '4b',
    description: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { username, subject, description, id } = postData;
    action = {
      type: 'ADD_POST',
      username: username,
      subject: subject,
      description: description,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        username: username,
        subject: subject,
        description: description,
        id: id
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {username: 'Jasmine and Justine',
        subject: '2a',
        description: 'Reducer has side effects.',
        id: 2 }
    });
  });

});