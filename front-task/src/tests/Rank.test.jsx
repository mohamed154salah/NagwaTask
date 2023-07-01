import Rank from "../components/Rank";
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Rank component", () => {
  it("the title is visible", async () => {
    render(<Rank score={90} />, { wrapper: BrowserRouter });
    const title = await screen.findByText(/80/i);
    expect(title).toBeInTheDocument();
  });


});
