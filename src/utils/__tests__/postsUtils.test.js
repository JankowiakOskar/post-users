import { getRepeatedTitles } from '../postsUtils';

test('Return in array only titles wich were repeated', () => {
  const repeatedTitles = [
    { title: 'xyz' },
    { title: 'xyz' },
    { title: 'ooo' },
    { title: 'ooo' },
  ];
  const data = [{ title: 'abc' }, { title: 'zzz' }, ...repeatedTitles];
  const recivedData = getRepeatedTitles(data);

  expect(recivedData).toEqual(expect.arrayContaining(['xyz', 'ooo']));
});
