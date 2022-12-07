import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Photowall from "./Photowall";
import "@testing-library/jest-dom";

jest.mock("../photo/Photo", () => () => <div data-testid="photo" />);

describe("Photowall", () => {
  test("renders correctly", () => {
    const posts = [
      {
        id: 1,
        imageLink: "link",
        description: "nice!",
      },
      {
        id: 2,
        imageLink: "link1",
        description: "nice1!",
      },
    ];

    render(<Photowall posts={posts} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getAllByTestId(/photo/)).toHaveLength(posts.length);
  });
});
