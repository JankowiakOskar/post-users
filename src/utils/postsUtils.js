export const getRepeatedTitles = (posts) => {
  const mergeString = (str) => str.split(' ').join('').toUpperCase();
  const repeatedTitles = posts.reduce((acc, { title }) => {
    const mergedTitle = mergeString(title);
    const isRepeated =
      posts.filter((post) => mergeString(post.title) === mergedTitle).length >
      1;
    const titleAlreadyExist = acc.find((el) => mergeString(el) === mergedTitle);
    if (isRepeated && !titleAlreadyExist) acc.push(title);
    return acc;
  }, []);
  return repeatedTitles;
};
