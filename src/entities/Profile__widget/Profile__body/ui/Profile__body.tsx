import styles from './Profile__body.module.scss';

export const Profile__body: React.FC = (): React.JSX.Element => {
    return (
        <div className={styles.profile__body}>

            <div className={styles.profile__body__avatar}>
                <img className={styles.profile__body__avatar__img} src="images/other/default-user.png" alt="Изображение пользователя" />
            </div>

            <h2 className={styles.profile__body__avatar__caption}>Квартира мечты!</h2>
            <span className={styles.profile__body__avatar__category}>Интерьер и строительство</span>

            <div className={styles.profile__body__channel_info}>

                <div className={styles.profile__body__channel_link}>
                    <img className={styles.profile__body__channel_link__icon} src="icons/profile__body/channel_link.png" alt="Изображение иконки ссылки" />
                    <a className={styles.profile__body__channel_link__text} href="#">https://t.me/silka</a>
                </div>

                <p className={styles.profile__body__channel_info_text}>Пример текста описания канала: поможем с поиском и покупкой квартиры! У нас только проверенные решения!</p>

                <img className={styles.profile__body__channel_info_line} src="icons/profile__body/profile__line_separator.png" alt="Разделительная строка в профиле" />

                <div className={styles.profile__body__channel_info__categories}>

                    <div className={styles.profile__body__channel_info__category}>
                        <span className={styles.profile__body__channel_info__category_caption}>Вид трафика</span>
                        <span className={styles.profile__body__channel_info__category_desc}>Telegram</span>
                    </div>

                    <div className={styles.profile__body__channel_info__category}>
                        <span className={styles.profile__body__channel_info__category_caption}>Вид поста</span>
                        <span className={styles.profile__body__channel_info__category_desc}>Прямой</span>
                    </div>

                    <div className={styles.profile__body__channel_info__category}>
                        <span className={styles.profile__body__channel_info__category_caption}>Целевая ауд.</span>
                        <span className={styles.profile__body__channel_info__category_desc}>МЦА</span>
                    </div>

                    <div className={styles.profile__body__channel_info__category}>
                        <span className={styles.profile__body__channel_info__category_caption}>Вид ссылки</span>
                        <span className={styles.profile__body__channel_info__category_desc}>Публичный канал</span>
                    </div>

                </div>

            </div>

        </div>
    )
}
