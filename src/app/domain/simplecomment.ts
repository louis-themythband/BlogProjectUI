import { User } from './user';

export interface SimpleComment {
	blogId: number;
	commentTitle: string;
	commentText: string;
	commentUser: User;
	parentCommentId: number;
	active: boolean;
	createdDate?: Date;
}