import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/test/test.utils';
import Category from '../category.component';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    category: 'mens',
  }),
}));

describe('Category tests', () => {
  test('It should render a Spinner if isLoading is true', () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('It should render products if isLoading is false and there are items present', () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: 'mens',
              items: [
                {
                  id: 1,
                  name: 'prod 1',
                },
                {
                  id: 2,
                  name: 'prod 2',
                },
              ],
            },
          ],
        },
      },
    });

    const spinnerElement = screen.queryByTestId('spinner');
    expect(spinnerElement).toBeNull();

    const product1Element = screen.getByText(/prod 1/i);
    expect(product1Element).toBeInTheDocument();

    const product2Element = screen.getByText(/prod 2/i);
    expect(product2Element).toBeInTheDocument();
  });
});
