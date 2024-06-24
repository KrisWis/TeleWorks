import { lazy } from 'react';

export const Profile: React.LazyExoticComponent<React.FC<{}>> = lazy(() =>
    import('./Profile/ui/Profile')
        .then(({ Profile }) => ({ default: Profile })),
);

export const Stats: React.LazyExoticComponent<React.FC<{}>> = lazy(() =>
    import('./Stats/ui/Stats')
        .then(({ Stats }) => ({ default: Stats })),
);

export const Buy_ads: React.LazyExoticComponent<React.FC<{}>> = lazy(() =>
    import('./Buy_ads/ui/Buy_ads')
        .then(({ Buy_ads }) => ({ default: Buy_ads })),
);

export const Channel_stats: React.LazyExoticComponent<React.FC<{}>> = lazy(() =>
    import('./Channel_stats/ui/Channel_stats')
        .then(({ Channel_stats }) => ({ default: Channel_stats })),
);