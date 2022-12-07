import { screen, render } from "@testing-library/react";
import Comment from "./Comment";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

describe("Comments", () => {
  const comments = ["hii there", "great picture"];
  test("renders comments correctly", () => {
    render(<Comment comments={comments} />);
    expect(screen.getAllByRole("paragraph")).toHaveLength(comments.length);
  });

  test("renders form elements correctly", () => {
    render(<Comment comments={comments} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("call onsubmit when press enter", async () => {
    user.setup();
    function startAddingComment() {
      comments.push("hi", 1);
    }
    const handleSubmit = jest.fn();
    render(
      <Comment comments={comments} startAddingComment={startAddingComment} />
    );
    const commentInput = screen.getByRole("textbox");
    const enterButton = await screen.findByTestId("button");
    expect(enterButton).toBeInTheDocument();
    // expect(handleSubmit).toHaveBeenCalled();
  });
});
