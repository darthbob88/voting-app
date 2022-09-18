import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText, container } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
