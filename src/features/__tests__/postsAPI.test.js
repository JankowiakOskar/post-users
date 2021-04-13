import axios from 'axios';
import { getAllPosts } from '../posts/postsAPI';

jest.mock('axios');
afterEach(() => jest.clearAllMocks());

test('should fetch posts', async () => {
  const posts = [
    { id: 1, title: 'first post' },
    { id: 2, title: 'second post' },
  ];
  const response = { data: posts };

  axios.get.mockImplementation(() => Promise.resolve(response));

  const result = await getAllPosts();

  expect(result).toEqual(posts);
});
