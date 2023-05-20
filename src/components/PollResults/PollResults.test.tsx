import { render } from '@testing-library/react';
import { createPoll } from '../../model/DataAccess';
import { testPoll } from '../../model/Poll';
import PollResults from './PollResults';

// TODO: Again, clear this once I have a proper database.
beforeEach(() => {
    localStorage.clear();
    createPoll(testPoll);

})

test('renders PollResults component', () => {
    const { getByText, container } = render(<PollResults pollID={testPoll.ID} />);
    expect(container).toMatchSnapshot();
});

xtest('user can cast ballot with proper result', () => {
    const { getByText, container } = render(<PollResults pollID={testPoll.ID} />);
    expect(container).toMatchSnapshot();
});

xtest('user cannot submit empty ballot', () => {
    const { getByText, container } = render(<PollResults pollID={testPoll.ID} />);
    expect(container).toMatchSnapshot();
});



