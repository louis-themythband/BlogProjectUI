import { User } from './user';

export interface Comment {
   commentId: number;
	blogId: number;
	commentTitle: string;
	commentText: string;
	commentUser: User;
	commentsList: Comment[];
	likes?: number;
	dislikes?: number;
	rating?: number;
	active: boolean;
	createdDate: Date;
	parentCommentId: number;
}