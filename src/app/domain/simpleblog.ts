import { User } from 'src/app/domain/user';
import { Status } from './status';
import { Visibility } from './visibility';

export interface SimpleBlog {
   blogId: number;
	title: string;
	user: User;
	createdDatetime: Date;
	publishedDatetime: Date;
	active: boolean;
	status: Status;
	visibility: Visibility;
}