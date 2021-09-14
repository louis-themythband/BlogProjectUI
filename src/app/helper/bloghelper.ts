
import { Blog } from 'src/app/domain/blog';
import { Status } from '../domain/status';
import { SimpleBlog } from '../domain/simpleblog';
import { Visibility } from '../domain/visibility';
import { UserHelper } from './userhelper';

export class BlogHelper {
   public createEmptyBlog(): Blog {

		const  blog: Blog = {
			blogId: 0, title: '', text: '', user: new UserHelper().createEmptyUser(), status: Status.DRAFT,
			commentList: [], createdDatetime: new Date(), active: true, likes: 0, visibility: 'PUBLIC',
			dislikes: 0, rating: 0, editedDatetime: new Date(), commentSecurity: 0, categoryList: []
		};
		return blog;
	 }

	 public createEmptySimpleBlog(): SimpleBlog {
		const blog: SimpleBlog = {blogId: 0, title: '', status: Status.DRAFT, user: new UserHelper().createEmptyUser(),
			createdDatetime: new Date(), active: true, visibility: Visibility.PUBLIC, publishedDatetime: new Date()};

		return blog;
	 }
}