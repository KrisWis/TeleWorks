import { lazy } from 'react';

export const CatalogCartPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import('./ui/CatalogCartPage').then(({ CatalogCartPage }) => ({
    default: CatalogCartPage,
  }))
);