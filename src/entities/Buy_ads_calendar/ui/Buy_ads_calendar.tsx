import styles from './Buy_ads_calendar.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperNavigationOptions } from '../model/Buy_ads_calendar__data';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import { Buy_ads_calendar__item } from '@/entities/Buy_ads_calendar__item/ui/Buy_ads_calendar__item';

export const Buy_ads_calendar: React.FC = (): React.JSX.Element => {

    return (
        <div className={styles.buy_ads_calendar}>

            <svg className={`${styles.buy_ads_calendar_arrow} ${styles.buy_ads_calendar_arrowPrev}`} id="buy_ads__calendar_swiper-prev" width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.11816 10.0154C0.644487 9.5417 0.644487 8.77373 1.11816 8.30005L8.83712 0.581094C9.31079 0.107421 10.0788 0.107421 10.5524 0.581094C11.0261 1.05477 11.0261 1.82274 10.5524 2.29642L3.69115 9.15771L10.5524 16.019C11.0261 16.4927 11.0261 17.2607 10.5524 17.7343C10.0788 18.208 9.31079 18.208 8.83712 17.7343L1.11816 10.0154ZM25.4639 10.3706H1.97582V7.9448H25.4639V10.3706Z" fill="#4266C6" />
            </svg>

            <svg className={`${styles.buy_ads_calendar_arrow} ${styles.buy_ads_calendar_arrowNext}`} id="buy_ads__calendar_swiper-next" width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.7285 10.0154C25.2022 9.5417 25.2022 8.77373 24.7285 8.30005L17.0096 0.581094C16.5359 0.107421 15.7679 0.107421 15.2942 0.581094C14.8206 1.05477 14.8206 1.82274 15.2942 2.29642L22.1555 9.15771L15.2942 16.019C14.8206 16.4927 14.8206 17.2607 15.2942 17.7343C15.7679 18.208 16.5359 18.208 17.0096 17.7343L24.7285 10.0154ZM0.382812 10.3706H23.8709V7.9448H0.382812V10.3706Z" fill="#4266C6" />
            </svg>

            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={swiperNavigationOptions}>

                <SwiperSlide>

                    <Buy_ads_calendar__item />

                </SwiperSlide>

                <SwiperSlide>

                    <Buy_ads_calendar__item />

                </SwiperSlide>

            </Swiper>

        </div>
    )
}
