export type BlogPostThemes = "Покупатель канала";

export type BlogAuthorsCategories = "Рейтинг или специализация";

export interface BlogOpenPostInterface {
  date: Date;
  title: string;
  theme: BlogPostThemes;
  viewsAmount: number;
  likesAmount: number;
  commentsAmount: number;
  postImgURL: string;
  authorImgURL: string;
  authorName: string;
  authorCategory: BlogAuthorsCategories;
  text: string;
  tags: string[];
}

export interface BlogOpenPostProps {
  id: number;
}
