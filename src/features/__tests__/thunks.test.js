import mockAxios from 'axios';
import { getPosts } from '../posts/postsSlice';

jest.mock('axios');

mockAxios.get.mockImplementation(() =>
  Promise.resolve({
    data: [
      { id: 1, title: 'post one', body: 'my first post' },
      { id: 2, title: 'post two', body: 'my second post' },
    ],
  }),
);

describe('thunks tests', () => {
  it('should return posts', async () => {
    const results = await getPosts();
    expect(results).toBe([
      { id: 1, title: 'post one', body: 'my first post' },
      { id: 2, title: 'post two', body: 'my second post' },
    ]);
  });
});
