/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sandbox from ".";

describe("Sandbox", () => {
  beforeEach(() => {
    render(<Sandbox title="Photon" />);
  });

  it("displays the page heading", () => {
    const pageHeading = screen.getAllByRole("heading");
    expect(pageHeading[0]).toHaveTextContent("Roomba");
  });
});
