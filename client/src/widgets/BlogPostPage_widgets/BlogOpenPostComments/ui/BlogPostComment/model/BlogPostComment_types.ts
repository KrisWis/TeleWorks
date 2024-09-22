export interface BlogPostCommentInterface {
  id: number;
  authorImgURL: string;
  authorName: `@${string}`;
  createdDate: Date;
  text: string;
  likesAmount: number;
  dislikesAmount: number;
}

export interface BlogPostCommentProps {
  commentInfo: BlogPostCommentInterface;
  answers?: Omit<BlogPostCommentProps, "isAnswer">[];
  isAnswer: boolean;
}
