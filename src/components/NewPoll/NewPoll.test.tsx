import { render } from '@testing-library/react';
import NewPoll from './NewPoll';

test('renders New Poll component', () => {
    const { getByText, container } = render(<NewPoll />);
    expect(container).toMatchSnapshot();
});
