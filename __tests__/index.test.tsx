/**
 * @jest-environment jsdom. This is used for testing.
 */
import { render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
