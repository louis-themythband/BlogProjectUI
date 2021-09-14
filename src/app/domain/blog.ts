import { User } from './user';
import { Status } from './status';
import { Comment } from './comment';
import { Category } from './category';


export interface Blog {
   blogId: number;
	user: User;
	title: string;
	createdDatetime: Date;
	editedDatetime: Date;
	publishedDatetime?: Date;
	text: string;
	likes: number;
	dislikes: number;
	rating: number;
	active: boolean;
	commentSecurity: number;
	status: Status;
	visibility: string;
	commentList: Comment[];
	categoryList: Category[];
}