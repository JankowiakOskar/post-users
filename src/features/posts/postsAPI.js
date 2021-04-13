import axios from 'axios';

export const getAllPosts = async () => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return data;
  } catch (err) {
    return err;
  }
};
