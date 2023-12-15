import { render } from '@testing-library/react';
import PollListing from './PollListing';

test('renders PollListing component', () => {
    const { container } = render(<PollListing />);
    expect(container).toMatchSnapshot();
});
