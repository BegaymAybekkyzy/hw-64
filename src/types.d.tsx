export interface IPostForm {
  title: string;
  description: string;
  time: string;
}

export interface IPostAPI {
  [id: string]: IPostForm;
}

export interface IPost {
  id: string;
  title: string;
  description: string;
  time: string;
}
