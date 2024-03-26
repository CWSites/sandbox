/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from ".";

describe("Sandbox", () => {
  beforeEach(() => {
    render(<Page />);
  });

  it("displays the page heading", () => {
    const pageHeading = screen.getAllByRole("heading");
    expect(pageHeading[0]).toHaveTextContent("Stable Kernel");
  });
});
