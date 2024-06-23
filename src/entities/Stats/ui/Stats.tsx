import { Stats__items } from '../model/Stats';
import styles from './Stats.module.scss';
import { Stats__item } from './Stats__item/Stats__item';

export const Stats: React.FC = (): React.JSX.Element => {
    return (
        <section className={styles.stats}>

            <div className={styles.stats__items}>

                {Stats__items.map((Stats__item__props) => (
                    <Stats__item  {...Stats__item__props} />
                ))}

            </div>

        </section>
    )
}
