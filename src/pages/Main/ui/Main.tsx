import styles from './Main.module.scss';
import { lazy } from "react";

const Profile: React.LazyExoticComponent<React.FC<{}>> = lazy(() =>
    import("@/entities")
        .then(({ Profile }) => ({ default: Profile })),
);

const Stats: React.LazyExoticComponent<React.FC<{}>> = lazy(() =>
    import("@/entities")
        .then(({ Stats }) => ({ default: Stats })),
);

export const Main: React.FC = (): React.JSX.Element => {
    return (
        <main className={styles.main}>
            <Profile />
            <Stats />
        </main>
    )
}
