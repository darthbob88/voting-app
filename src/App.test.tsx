import { render } from '@testing-library/react';
import App from './App';
import { createPoll } from './model/DataAccess';
import { testPoll } from './model/Poll';

test('renders home page stuff', () => {
  createPoll({ ...testPoll, ID: "best-fruit" });
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
