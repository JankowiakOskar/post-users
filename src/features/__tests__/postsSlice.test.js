import postsReducer, { getPosts, initialState } from '../posts/postsSlice';

describe('Posts slice tests', () => {
  test('set loading true while action is pending', () => {
    const action = { type: getPosts.pending };
    const actual = postsReducer(initialState, action);
    expect(actual).toEqual({
      posts: [],
      isLoading: true,
      error: { message: '' },
    });
  });

  test('add posts while action is fullfilled', () => {
    const posts = [
      { id: 1, post: 'first post' },
      { id: 2, post: 'second post' },
    ];
    const action = { type: getPosts.fulfilled, payload: posts };
    const actual = postsReducer(initialState, action);
    expect(actual).toEqual(
      expect.objectContaining({ posts: expect.arrayContaining(posts) }),
    );
  });

  test('set error message while action is rejected', () => {
    const errorMsg = 'Something went wrong';
    const action = { type: getPosts.rejected, error: { message: errorMsg } };
    const actual = postsReducer(initialState, action);
    expect(actual).toEqual(
      expect.objectContaining({
        error: expect.objectContaining({ message: errorMsg }),
      }),
    );
  });
});
