export interface User {
	 userId: number;
	 firstName: string;
	 lastName: string;
	 userName: string;
	 userEmail: string;
	 isAdmin: boolean;
	 active: boolean;
	 canComment: boolean;
	 canBlog: boolean;
	 token: string;
}