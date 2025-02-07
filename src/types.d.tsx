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

export interface IContact {
  phone: number;
  position: string;
  photo: string;
  description: string;
}

export interface IInformation {
  address: string;
  region: string;
  planet: string;
}

export interface IBlogDataAPI {
  contacts: IContact[];
  information: IInformation;
}