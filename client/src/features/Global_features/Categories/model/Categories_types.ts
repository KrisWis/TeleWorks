export interface CategoriesProps {
  categories: string[];
  className?: string;
  SliderPrevArrowID: string;
  SliderNextArrowID: string;
  activeCategoryIndex: number;
  setActiveCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
}
