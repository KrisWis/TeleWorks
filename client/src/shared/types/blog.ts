export interface BlogPostCommentProps {
  commentInfo: BlogPostCommentInterface;
  answers?: Omit<BlogPostCommentProps, "isAnswer">[];
  isAnswer: boolean;
}
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
export interface BlogPopularPostsProps {
  blogPopularPosts: BlogPopularPostProps[];
}
export interface BlogPopularPostProps {
  id: number;
  imgURL: string;
  title: string;
  likesAmount: number;
  commentsAmount: number;
  bookmarksAmount: number;
}
export interface BlogPostCommentInterface {
  id: number;
  authorImgURL: string;
  authorName: `@${string}`;
  createdDate: Date;
  text: string;
  likesAmount: number;
  dislikesAmount: number;
}
export type BlogPostsCategories = "Фриланс";
