import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddPhoto from "./AddPhoto";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

describe("Addphoto", () => {
  test("renders correctly", () => {
    render(<AddPhoto />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByPlaceholderText("Link")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("should call handlesubmit on clicking the submit button", () => {
    user.setup();
    const handleSubmit = jest.fn();
    // expect(handleSubmit).toHaveBeenCalled();
  });
});
