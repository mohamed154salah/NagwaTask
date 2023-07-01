import Question from "../components/Question";
import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Question component", async () => {
  let json;
  try {
    const response = await fetch("http://localhost:8000/api/words");
    json = await response.json();
    console.log(json.list);
  } catch (error) {
    console.log("error", error);
  }

  const data = await json.list;
  it("the button is visible", async () => {
    render(<Question q={data} />, { wrapper: BrowserRouter });
    const button = document.querySelector("button");

    expect(button).toBeTruthy();
  });

  it("the word is visible", async () => {
    render(<Question q={data} />, { wrapper: BrowserRouter });
    let text = `what category this word '${data[0].word}' belongs to ?`;
    const h2 = document.querySelector("h2");

    expect(h2).toHaveTextContent(text);
  });
});
