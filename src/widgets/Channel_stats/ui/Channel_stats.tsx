import { Channel_stats_item } from '@/entities';
import styles from './Channel_stats.module.scss';
import { channel_stats__items } from '../model/Channel_stats__data';

export const Channel_stats: React.FC = (): React.JSX.Element => {
    return (
        <section className={styles.channel_stats}>

            <h2 className={styles.channel_stats__caption}>Статистика канала</h2>

            <div className={styles.channel_stats__items}>

                {channel_stats__items.map((channel_stats__item) => (
                    <Channel_stats_item key={channel_stats__item.caption} {...channel_stats__item} />
                ))}

            </div>

        </section>
    )
}
