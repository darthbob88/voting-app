import { fireEvent, render, screen } from '@testing-library/react';
import NewPoll from './NewPoll';

const testVoteMethods = [{ value: "FPTP", name: "First past the post" }, { value: "IRV", name: "Instant runoff vote" }];

test('renders New Poll component', () => {
    const { container } = render(<NewPoll />);
    expect(container).toMatchSnapshot();
});

test('Can select poll type', () => {
    render(<NewPoll />);

    const methodSelect = screen.getByTestId('methodSelect');
    const methodOptions: HTMLOptionElement[] = screen.getAllByTestId('methodOption');
    const availableMethods = methodOptions.map(option => option.value);
    testVoteMethods.forEach(method => expect(availableMethods).toContain(method.value));

    fireEvent.change(methodSelect, { target: { value: testVoteMethods[0].value } });

    expect(methodOptions[0].selected).toBeTruthy();
    expect(methodOptions[1].selected).toBeFalsy();
})

// Separate tests for creating polls.
testVoteMethods.forEach(method => test(`Should properly create poll using voting method - ${method}`, async () => {

}))