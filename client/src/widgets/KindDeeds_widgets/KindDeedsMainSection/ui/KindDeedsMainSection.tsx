import styles from './KindDeedsMainSection.module.scss';
import { memo } from 'react';
import { KindDeedsMainSectionProps } from '../model/KindDeedsMainSection_types';

export const KindDeedsMainSection: React.FC<KindDeedsMainSectionProps> = memo((): React.JSX.Element => {
  return <div className={styles.KindDeedsMainSection}></div>;
})