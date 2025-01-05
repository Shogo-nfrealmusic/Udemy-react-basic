import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe('Message Cop test', () => {
    describe('Init Display', () => {
        test('Input element should be in the document', () => {
            render(<Message />);
            const inputEl = screen.getByRole('textbox');
            expect(inputEl).toBeInTheDocument();
        });

        test('User can type in the input element', async () => {
            const user = userEvent.setup();
            render(<Message />);
            const inputEl = screen.getByRole('textbox');

            await user.type(inputEl, "hello");
            expect(inputEl.value).toBe("hello");
        });
    });
});
