import { Profile__body, Profile__footer, Profile__header } from '@/entities';
import styles from './Profile.module.scss';

export const Profile: React.FC = (): React.JSX.Element => {
    return (
        <section className={styles.profile}>

            <Profile__header />
            <Profile__body />
            <Profile__footer />

        </section>
    )
}
