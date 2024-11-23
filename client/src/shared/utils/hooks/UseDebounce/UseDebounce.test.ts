import { UseDebounce } from "./UseDebounce";

const TimeoutDelay: number = 1000;

describe("UseDebounce", () => {
  let callback: jest.Mock;
  let debouncedFunc: () => void;

  beforeEach(() => {
    callback = jest.fn();
    debouncedFunc = UseDebounce(callback, TimeoutDelay);
  });

  test("just call", () => {
    debouncedFunc();

    expect(callback).not.toHaveBeenCalled();

    setTimeout(() => {
      expect(callback).toHaveBeenCalled();
    }, TimeoutDelay);
  });

  test("call two times", () => {
    debouncedFunc();

    expect(callback).not.toHaveBeenCalled();

    debouncedFunc();

    expect(callback).not.toHaveBeenCalled();
  });

  test("call two times with timers", () => {
    debouncedFunc();

    expect(callback).not.toHaveBeenCalled();

    setTimeout(() => {
      debouncedFunc();
      expect(callback).not.toHaveBeenCalled();
    }, TimeoutDelay / 2);

    setTimeout(() => {
      expect(callback).toHaveBeenCalled();
    }, TimeoutDelay);
  });
});
