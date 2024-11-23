import { BlogAuthorsCategories } from "../../BlogOpenPost/model/BlogOpenPost_types";

export interface BlogOpenPostCommentsUser {
  imgURL: string;
  title: string;
  category: BlogAuthorsCategories;
}

export interface BlogOpenPostCommentsProps {
  id: string;
}
