import styles from './Profile.module.scss';
import { Profile__body } from '../../../entities/Profile__body/ui/Profile__body';
import { Profile__footer } from '../../../entities/Profile__footer/ui/Profile__footer';
import { Profile__header } from '../../../entities/Profile__header/ui/Profile__header';

export const Profile: React.FC = (): React.JSX.Element => {
    return (
        <section className={styles.profile}>

            <Profile__header />
            <Profile__body />
            <Profile__footer />

        </section>
    )
}
