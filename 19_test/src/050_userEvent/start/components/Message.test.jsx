import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe('Message Cop test', () => {
    describe('Init Display', () => {
        test('Input', () => {
            render(<Message />);
            const h2El = screen.getByRole('heading', { name: '入力された文字:' });
            expect(h2El).toBeInTheDocument();
        });
        test('Input > Press button', async () => {
            const user = userEvent.setup();
            render(<Message />);
            const inputEl = screen.getByRole('textbox');
            const btnEl = screen.getByRole('button', { name: '送信ボタン' });
            const h2El = screen.getByRole('heading', { name: '入力された文字:' });

            // 初期状態の確認
            expect(btnEl).toBeDisabled();
            expect(inputEl.value).toBe("");
            expect(h2El).toHaveTextContent("入力された文字:");

            // 入力とボタンの有効化確認
            await user.type(inputEl, "hello");
            expect(btnEl).not.toBeDisabled();

            // ボタンをクリックして結果を確認
            await user.click(btnEl);
            expect(h2El).toHaveTextContent("入力された文字:hello");
        });
    });
});
