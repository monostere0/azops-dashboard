import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

let mockIsEmpty = true;
jest.mock("./services/UserSettings", () => ({
  projNames: ["Pulsar"],
  get isEmpty() {
    return mockIsEmpty;
  },
}));

test("renders the config modal when no settings are available", () => {
  mockIsEmpty = true;

  render(<App />);

  expect(screen.getByText(/User configuration/i)).toBeInTheDocument();
});

test("renders the app if settings are supplied", async () => {
  mockIsEmpty = false;

  render(<App />);

  expect(screen.getByText(/Az Repos Watcher/i)).toBeInTheDocument();
});
