import axios, {AxiosResponse} from 'axios';
import {IPost} from "../models/IPost";
import {IAuthor} from "../models/IAuthor";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export default class PostService {
    static async getAll():Promise<AxiosResponse<IPost[]>> {
        return instance.get<IPost[]>('posts')
    }
    static async  getAuthors():Promise<AxiosResponse<IAuthor[]>>{
        return instance.get<IAuthor[]>('users')
    }
}