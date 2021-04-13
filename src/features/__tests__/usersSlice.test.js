import postsReducer, { getUsers, initialState } from '../users/usersSlice';

describe('Users slice tests', () => {
  it('set loading true while action is pending', () => {
    const action = { type: getUsers.pending };
    const actual = postsReducer(initialState, action);
    expect(actual).toEqual({
      users: [],
      isLoading: true,
      error: { message: '' },
    });
  });

  it('add users while action is fullfilled', () => {
    const users = [
      { id: 1, name: 'John Lenon' },
      { id: 2, post: 'Bianka Bloom' },
    ];
    const action = { type: getUsers.fulfilled, payload: users };
    const actual = postsReducer(initialState, action);
    expect(actual).toEqual(
      expect.objectContaining({ users: expect.arrayContaining(users) }),
    );
  });

  it('set error message while action is rejected', () => {
    const errorMsg = 'Something went wrong';
    const action = { type: getUsers.rejected, error: { message: errorMsg } };
    const actual = postsReducer(initialState, action);
    expect(actual).toEqual(
      expect.objectContaining({
        error: expect.objectContaining({ message: errorMsg }),
      }),
    );
  });
});
