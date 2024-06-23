import { Profile, Stats } from "@/entities"
import styles from './Main.module.scss';

export const Main: React.FC = (): React.JSX.Element => {
    return (
        <main className={styles.main}>
            <Profile />
            <Stats />
        </main>
    )
}
