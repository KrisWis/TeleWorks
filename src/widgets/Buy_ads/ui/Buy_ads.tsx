import { Buy_ads_form } from '@/entities/Buy_ads__widget/Buy_ads_form/ui/Buy_ads_form';
import styles from './Buy_ads.module.scss';
import { Buy_ads_calendar } from '@/entities/Buy_ads__widget/Buy_ads_calendar/ui/Buy_ads_calendar';

export const Buy_ads: React.FC = (): React.JSX.Element => {

    return (
        <section className={styles.buy_ads}>

            <Buy_ads_form />
            <Buy_ads_calendar />

        </section>
    )
}
