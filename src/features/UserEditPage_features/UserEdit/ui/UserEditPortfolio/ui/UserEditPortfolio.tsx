import {
  СhangeablePortfolioCase,
  СhangeablePortfolioCaseInterface,
} from "@/entities/UserEditPage_entities/СhangeablePortfolioCase";
import styles from "./UserEditPortfolio.module.scss";
import { memo, useState } from "react";
import { portfolioExistedCases } from "../model/UserEditPortfolio_data";

export const UserEditPortfolio: React.FC = memo((): React.JSX.Element => {
  const [ExistedCases, setExistedCases] = useState<
    СhangeablePortfolioCaseInterface[]
  >(portfolioExistedCases);

  return (
    <div className={styles.userEditPortfolio}>
      <div className={styles.userEditPortfolio__header}>
        <h4 className="UserEditPage__caption">Портфолио</h4>

        <span
          onClick={() => setExistedCases([{}, ...ExistedCases])}
          className={styles.userEditPortfolio__addCase}
        >
          + Добавить кейс
        </span>
      </div>

      <div className={styles.userEditPortfolio__cases}>
        {!ExistedCases ? (
          <div className={styles.userEditPortfolio__cases__empty}>
            <span className={styles.userEditPortfolio__cases__empty__text}>
              Проектов ещё нет!
            </span>
          </div>
        ) : (
          (ExistedCases as СhangeablePortfolioCaseInterface[]).map(
            (portfolioCase) => (
              <СhangeablePortfolioCase
                setExistedCases={setExistedCases}
                Case={portfolioCase}
              />
            )
          )
        )}
      </div>
    </div>
  );
});
