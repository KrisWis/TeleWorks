import { Buy_ads, Channel_reviews, Channel_stats, Profile, Stats } from '@/widgets';
import styles from './Main.module.scss';

export const Main: React.FC = (): React.JSX.Element => {
    return (
        <main className={styles.main}>
            <Profile />
            <Stats />
            <Buy_ads />
            <Channel_stats />
            <Channel_reviews />
        </main>
    )
}
