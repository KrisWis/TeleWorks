import styles from './Main.module.scss';
import { lazy } from "react";

const Profile: React.LazyExoticComponent<React.FC<{}>> = lazy(() =>
    import("@/widgets")
        .then(({ Profile }) => ({ default: Profile })),
);

const Stats: React.LazyExoticComponent<React.FC<{}>> = lazy(() =>
    import("@/widgets")
        .then(({ Stats }) => ({ default: Stats })),
);

const Buy_ads: React.LazyExoticComponent<React.FC<{}>> = lazy(() =>
    import("@/widgets")
        .then(({ Buy_ads }) => ({ default: Buy_ads })),
);

export const Main: React.FC = (): React.JSX.Element => {
    return (
        <main className={styles.main}>
            <Profile />
            <Stats />
            <Buy_ads />
        </main>
    )
}
