import styles from './Profile.module.scss';
import { Profile__body } from './Profile__body/Profile__body';
import { Profile__footer } from './Profile__footer/Profile__footer';
import { Profile__header } from './Profile__header/Profile__header';

export const Profile: React.FC = (): React.JSX.Element => {
    return (
        <section className={styles.profile}>

            <Profile__header />
            <Profile__body />
            <Profile__footer />

        </section>
    )
}
