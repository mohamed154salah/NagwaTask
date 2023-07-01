import Start from "../components/Start";
import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";


describe("start component", () => {

  it("the title is visible", async () => {
    render(<Start />, { wrapper: BrowserRouter });
    const title = await screen.findByText(/Part of speech test/i);
    expect(title).toBeInTheDocument();
  });

  it("the link is visible", async () => {
    render(<Start />, { wrapper: BrowserRouter });

    const user = userEvent.setup();
    const start = vi.spyOn(user, "click");
    const startLink = screen.getByText(/Start/i);

    await user.click(startLink);

    expect(start).toHaveBeenCalledTimes(1);
  });
});
