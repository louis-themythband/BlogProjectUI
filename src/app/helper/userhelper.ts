import { User } from'src/app/domain/user';


export class UserHelper {
   public createEmptyUser(): User {
		const user: User = {userId: 0, lastName: '', firstName: '', userName: 'Anonymous', active: true, canComment: true, 
		canBlog: true, isAdmin: false, userEmail: '', token: '0000000000000000'};
		
		return user;
	}

}