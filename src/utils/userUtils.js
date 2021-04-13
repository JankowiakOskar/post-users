export const countUsersPosts = (users) =>
  users.map(
    ({ username, posts: userPosts }) =>
      `${username} napisał ${userPosts.length} postów`,
  );

export const mergeUsersWithPosts = (users, posts) => {
  const mergedArr = users.map((user) => {
    const newUser = user;
    const userPosts = posts.filter(({ userId }) => userId === user.id);
    return {
      ...newUser,
      posts: userPosts,
    };
  });
  return mergedArr;
};

export const getHaversineDistance = (firstLocation, secondLocation) => {
  const earthRadius = 6371; // km

  const diffLat = ((+secondLocation.lat - +firstLocation.lat) * Math.PI) / 180;
  const diffLng = ((+secondLocation.lng - +firstLocation.lng) * Math.PI) / 180;

  const arc =
    Math.cos((firstLocation.lat * Math.PI) / 180) *
      Math.cos((secondLocation.lat * Math.PI) / 180) *
      Math.sin(diffLng / 2) *
      Math.sin(diffLng / 2) +
    Math.sin(diffLat / 2) * Math.sin(diffLat / 2);
  const line = 2 * Math.atan2(Math.sqrt(arc), Math.sqrt(1 - arc));

  const distance = earthRadius * line;

  return distance;
};

export const matchUsersByClosestGeo = (users, geoDistanceCB) => {
  const matchedUsers = users.reduce((acc, user) => {
    let lowestDistance = 0;
    let closestUser = {};
    const {
      username,
      address: { geo },
    } = user;

    users.forEach((member) => {
      if (username === member.username) return;
      const currDistance = geoDistanceCB(geo, member.address.geo);
      if (lowestDistance === 0 || lowestDistance > currDistance) {
        lowestDistance = currDistance;
        closestUser = { ...member };
      }
    });

    acc.push(
      `${username} mieszka najbliżej ${
        closestUser.username
      } dzieli ich dystans ${lowestDistance.toFixed(0)} km`,
    );

    return acc;
  }, []);

  return matchedUsers;
};
