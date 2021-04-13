import { render } from '@testing-library/react';
import LoadingProvider from '../LoadingProvider';
import TitledList from '../../components/TitledList/TitledList';

describe('Loading Provider tests', () => {
  test('should display loading message while props isLoading is true', () => {
    const isLoading = true;
    const rtl = render(
      <LoadingProvider isLoading={isLoading}>
        <TitledList title="test list" list={[]} />
      </LoadingProvider>,
    );
    expect(rtl.getByTestId('loader-message')).toBeInTheDocument();
  });
});
