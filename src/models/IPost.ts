import {IAuthor} from "./IAuthor";
export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
    author: IAuthor;
}