export interface CatalogCartSliceItem {
  id: number;
  amount: number;
}

export interface CatalogCartSliceSchema {
  items: CatalogCartSliceItem[];
}
export enum CatalogItemTags {
  TAG1 = "tag1",
  TAG2 = "tag2",
  TAG3 = "tag3",
}

export interface CatalogItemInterface {
  id: number;
  imgURL: string;
  ratingNumber: number;
  title: string;
  desc: string;
  tags: CatalogItemTags[];
  stars: number;
  subscribersAmount: number;
  menPercent: number;
  womenPercent: number;
  ThousandsViews: number;
  ER: number;
  CPV: number;
  price: number;
}
