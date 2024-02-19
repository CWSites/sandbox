/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

describe("Sandbox", () => {
  beforeEach(() => {
    render(<Page />);
  });

  it("displays the page heading", () => {
    const pageHeading = screen.getAllByRole("heading");
    expect(pageHeading[0]).toHaveTextContent("Welcome to my sandbox!");
  });

  it("displays the counter", () => {
    const counter = screen.getByRole("button");
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent("+");
  });
});
