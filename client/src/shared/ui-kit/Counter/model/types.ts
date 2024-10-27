type CounterTypes = "small" | "medium";

export interface CounterProps {
  amount: number;
  dicreaseAmount: () => void;
  increaseAmount: () => void;
  isDisabled?: boolean;
  type?: CounterTypes;
}
