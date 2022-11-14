import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText, container } = render(<App />);
  expect(container).toMatchSnapshot();
});
