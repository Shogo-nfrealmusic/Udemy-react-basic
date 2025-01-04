import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test('Exist h1', () => {
    render(<Greet />);
    const h1El = screen.getByText("こんにちは")
    expect(h1El).toBeInTheDocument();
})