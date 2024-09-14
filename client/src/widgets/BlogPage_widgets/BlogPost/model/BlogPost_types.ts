export type BlogPostsCategories = "Фриланс";

export interface BlogPostProps {
  id: number;
  imgURL: string;
  category: BlogPostsCategories;
  dateOfCreation: Date;
  title: string;
  likesAmount: number;
  commentsAmount: number;
  bookmarksAmount: number;
}
