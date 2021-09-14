import { User } from './user';

export interface LoginUser {
   responseCode: number;
   responseMessage: string;
   user: User;
   date: Date;
}
