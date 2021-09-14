import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../domain/user';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

   private pIsAuthenticated: boolean = false;
   private pUser: User = {
         userId: 0,
         firstName: 'Anonymous',
         lastName: 'User',
         userEmail: '',
         userName: 'Anonymous',
         isAdmin: false,
         active: false,
         canComment: false,
         canBlog: true,
         token: '0000000000000000'
      };


   constructor(private router: Router, private userService: UserService) {
      this.isAuthenticated = false;
   }


   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
      if (this.pUser !== null && this.pUser.active && this.pUser.isAdmin)
      {
         this.isAuthenticated = true;
         this.router.navigate([state.url]);
         return this.isAuthenticated;
      }
      else
      {
         this.router.navigate(['login']);
         return false;
      }
   }

   public set isAuthenticated(authenticated: boolean) {
      this.pIsAuthenticated = authenticated;
   }

   public get isAuthenticated(): boolean {
      return this.pIsAuthenticated;
   }

   public set user(user: User) {
     this.pUser = user;
   }

   public get user(): User {
      return this.pUser;
   }

   public logout(): void
   {
      this.isAuthenticated = false;
      this.pUser = {
         userId: 0,
         firstName: 'Anonymous',
         lastName: 'User',
         userEmail: '',
         userName: 'Anonymous',
         isAdmin: false,
         active: false,
         canComment: false,
         canBlog: true,
         token: '0000000000000000'
      };
   }

   public get visiblilty(): string
   {
      if (this.isAuthenticated)
      {
         return 'PROTECTED';
      }
      else
      {
         return 'NONE';
      }
   }
}