import { describe, expect, it, vi } from "vitest";
import { dispatch } from "./utils";

describe("dispatch", () => {
  it("should call the handler if it is a function", async () => {
    const handler = vi.fn();

    await dispatch(handler, {});

    expect(handler).toHaveBeenCalled();
  });

  it("should call all handlers if it is an array of functions", async () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    await dispatch([handler1, handler2], {});

    expect(handler1).toHaveBeenCalled();
    expect(handler2).toHaveBeenCalled();
  });

  it("should not throw if an empty array is provided", async () => {
    await expect(dispatch([], {})).resolves.not.toThrow();
  });
});
