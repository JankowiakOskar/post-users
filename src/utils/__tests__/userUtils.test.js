import { mergeUsersWithPosts, countUsersPosts } from '../userUtils';

describe('Test users utils functions', () => {
  const users = [
    { id: 1, username: 'Jorge Dash' },
    { id: 2, username: 'Agnes Bloom' },
  ];
  const postsUser1 = [
    { userId: 1, id: 1, title: 'aaaa', body: 'zxczcz' },
    { userId: 1, id: 2, title: 'bbb', body: 'qqwe' },
  ];
  const postsUser2 = [
    { userId: 2, id: 3, title: 'ccc', body: 'czx' },
    { userId: 2, id: 4, title: 'zzz', body: 'nvbn' },
  ];
  const posts = [...postsUser1, ...postsUser2];

  test('Merge users with posts when user id is matching', () => {
    const mergedArr = mergeUsersWithPosts(users, posts);

    expect(mergedArr).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          username: 'Jorge Dash',
          posts: postsUser1,
        }),
        expect.objectContaining({
          id: 2,
          username: 'Agnes Bloom',
          posts: postsUser2,
        }),
      ]),
    );
  });

  test('Count users posts properly after merging with posts', () => {
    const mergedArr = mergeUsersWithPosts(users, posts);
    const results = countUsersPosts(mergedArr);

    expect(results).toEqual(
      expect.arrayContaining([
        `${users[0].username} napisał ${postsUser1.length} postów`,
        `${users[1].username} napisał ${postsUser2.length} postów`,
      ]),
    );
  });
});
