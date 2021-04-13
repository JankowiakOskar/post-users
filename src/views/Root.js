import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, selectPosts } from '../features/posts/postsSlice';
import { getUsers, selectUsers } from '../features/users/usersSlice';
import { getRepeatedTitles } from '../utils/postsUtils';
import {
  mergeUsersWithPosts,
  matchUsersByClosestGeo,
  countUsersPosts,
  getHaversineDistance,
} from '../utils/userUtils';
import TitledList from '../components/TitledList/TitledList';
import LoadingProvider from '../Providers/LoadingProvider';

const Root = () => {
  const { posts, isLoading: isLoadingPosts } = useSelector(selectPosts);
  const { users, isLoading: isLoadingUsers } = useSelector(selectUsers);
  const dispatch = useDispatch();
  const anyPostExist = posts.length > 0;
  const anyUserExist = users.length > 0;
  const usersWithPosts = mergeUsersWithPosts(users, posts);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <LoadingProvider isLoading={isLoadingPosts || isLoadingUsers}>
        {usersWithPosts.length > 1 && (
          <TitledList
            title="Counted users posts"
            list={countUsersPosts(usersWithPosts)}
          />
        )}
        {anyPostExist && (
          <TitledList title="Repeated titles" list={getRepeatedTitles(posts)} />
        )}
        {anyUserExist && (
          <TitledList
            title="Matched users by closest geo distance"
            list={matchUsersByClosestGeo(users, getHaversineDistance)}
          />
        )}
      </LoadingProvider>
    </div>
  );
};

export default Root;
