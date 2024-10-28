import styles from './CartStats.module.scss';
import { memo } from 'react';
import { CartStatsProps } from '../model/types';

export const CartStats: React.FC<CartStatsProps> = memo((): React.JSX.Element => {
  return <div className={styles.CartStats}></div>;
})