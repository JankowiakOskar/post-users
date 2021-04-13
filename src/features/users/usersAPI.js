import axios from 'axios';

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return data;
  } catch (err) {
    return err;
  }
};
