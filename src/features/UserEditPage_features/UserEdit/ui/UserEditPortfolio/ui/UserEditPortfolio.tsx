import {
  СhangeablePortfolioCase,
  СhangeablePortfolioCaseInterface,
} from "@/entities/UserEditPage_entities/СhangeablePortfolioCase";
import styles from "./UserEditPortfolio.module.scss";
import { memo, useCallback, useState } from "react";
import { portfolioExistedCases } from "../model/UserEditPortfolio_data";

export const UserEditPortfolio: React.FC = memo((): React.JSX.Element => {
  // Добавление новых кейсов
  const [ExistedCases, setExistedCases] = useState<
    СhangeablePortfolioCaseInterface[]
  >(portfolioExistedCases);

  const addNewCase = useCallback(
    (index: number): void => {
      setExistedCases([{ index: index }, ...ExistedCases]);
    },
    [ExistedCases]
  );

  return (
    <div className={styles.userEditPortfolio}>
      <div className={styles.userEditPortfolio__header}>
        <h4 className="UserEditPage__caption">Портфолио</h4>

        <span
          onClick={() => addNewCase(ExistedCases.length)}
          className={styles.userEditPortfolio__addCase}
        >
          + Добавить кейс
        </span>
      </div>

      <div className={styles.userEditPortfolio__cases}>
        {!ExistedCases.length ? (
          <div className={styles.userEditPortfolio__cases__empty}>
            <span className={styles.userEditPortfolio__cases__empty__text}>
              Проектов ещё нет!
            </span>
          </div>
        ) : (
          (ExistedCases as СhangeablePortfolioCaseInterface[]).map(
            (portfolioCase) => (
              <СhangeablePortfolioCase
                key={portfolioCase.index}
                setExistedCases={setExistedCases}
                Case={portfolioCase}
                ExistedCases={ExistedCases}
              />
            )
          )
        )}
      </div>
    </div>
  );
});
