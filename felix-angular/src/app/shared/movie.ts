import {Review} from './review';
export class Movie{
    id: number;
    name: string;
    image: string;
    link: string;
    description: string;
    reviews: Review[]
}