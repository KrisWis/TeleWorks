import { memo } from "react";
import { Button } from "../../Button";
import { LoadMoreProps } from "../model/LoadMore_types";

export const LoadMore: React.FC<LoadMoreProps> = memo(
  ({ type, className }): React.JSX.Element => {
    return <Button type={type} className={className} text="Загрузить еще" />;
  }
);
