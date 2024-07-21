import { UserTypes } from "./enums";

export interface IIcon {
  className: string;
}

export interface IReview {
  name: string;
  text: string;
  comments: number;
  likes: number;
  date: string;
  images: string[];
  avatar: string;
  id: number;
}

export interface IMessage {
  author: UserTypes;
  message: string;
  time: string;
}
