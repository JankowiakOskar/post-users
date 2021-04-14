import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Root from '../Root';

describe('Root tests', () => {
  beforeEach(() =>
    render(
      <Provider store={store}>
        <Root />
      </Provider>,
    ),
  );
  test('renders two lists', async () => {
    const lists = await screen.findAllByRole('list');
    expect(lists).toHaveLength(2);
  });
  test('render loading component', () => {
    const loader = screen.getByTestId('loader-message');
    expect(loader).toBeInTheDocument();
  });
  test('render one message', () => {
    const message = screen.getByTestId('message-emptylist');
    expect(message).toBeInTheDocument();
  });
});
