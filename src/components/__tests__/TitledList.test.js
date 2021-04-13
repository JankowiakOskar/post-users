import { render } from '@testing-library/react';
import TitledList from '../TitledList/TitledList';

describe('titled list', () => {
  test('renders a list of data and title passing via props propertly', () => {
    const listComments = ['first comment', 'second comment'];
    const titleData = 'Comments';
    const rtl = render(<TitledList title={titleData} list={listComments} />);

    listComments.forEach((comment) =>
      expect(rtl.getByText(comment)).toBeInTheDocument(),
    );

    expect(rtl.getByText(titleData)).toBeInTheDocument();
  });

  test('render message while passing list by props is empty', () => {
    const title = 'Testing list';
    const rtl = render(<TitledList title={title} list={[]} />);

    expect(
      rtl.getByText(`Brak pasujących wyników dla listy ${title}`),
    ).toBeInTheDocument();
  });
});
