import axios from 'axios';
import { getAllUsers } from '../users/usersAPI';

jest.mock('axios');
afterEach(() => jest.clearAllMocks());

test('should fetch users', async () => {
  const users = [
    { id: 1, username: 'Brandon' },
    { id: 2, username: 'Olek' },
  ];
  const response = { data: users };
  axios.get.mockImplementation(() => Promise.resolve(response));

  const results = await getAllUsers();

  expect(results).toEqual(users);
});
