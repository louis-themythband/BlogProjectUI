import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthGuard } from 'src/app/service/AuthGuard';
import { User } from 'src/app/domain/user';
import { Visibility } from 'src/app/domain/visibility';
import { SimpleBlog } from 'src/app/domain/simpleblog';
import { Status } from 'src/app/domain/status';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.scss']
})
export class AdminConsoleComponent implements OnInit {

  public items: MenuItem[] = [];
  public selectedUser: User =
  {
    userId: 0, firstName: '', lastName: '', isAdmin: false, active: false, userName: 'Anonymous', userEmail: '', canComment: false, 
    canBlog: true, token: '0000000000000000'
  };

  public selectedBlog: SimpleBlog =
  {
    blogId: 0, title: '', user: this.selectedUser, status: Status.DRAFT,
    createdDatetime: new Date(), active: false, visibility: Visibility.PUBLIC,
    publishedDatetime: new Date()
  };

  constructor(public auth: AuthGuard, private router: Router) {
    this.items =
    [{
      label: 'Blog', items: [
        {
          label: 'New Blog',
          icon: 'pi pi-fw pi-plus',
          visible: auth.isAuthenticated && auth.user.isAdmin,
          routerLink: ['new/blog']
        },
        {
          label: 'Edit My Blogs',
          icon: 'pi pi-fw pi-pencil',
          visible: auth.isAuthenticated && auth.user.isAdmin,
          routerLink: ['edit/myblogs']
        },
        {
          label: 'Delete Blog',
          icon: 'pi pi-fw pi-minus-circle',
          visible: auth.isAuthenticated && auth.user.isAdmin && (this.selectedBlog !== null),
          command: (event) => {this.deleteBlog(this.selectedBlog.blogId); }
        }]
    },
    {label: 'User', items: [
      {
        label: 'New User',
        icon: 'pi pi-fw pi-plus',
        visible: auth.isAuthenticated && auth.user.isAdmin,
        routerLink: ['new-user']
      },
      {
        label: 'Edit User',
        icon: 'pi pi-fw pi-pencil',
        visible: auth.isAuthenticated && auth.user.isAdmin && (this.selectedUser !== null),
        routerLink: ['edit-user']
      },
      {
        label: 'Delete User',
        icon: 'pi pi-fw pi-minus-circle',
        visible: auth.isAuthenticated && auth.user.isAdmin && (this.selectedUser !== null),
        command: (event) => {this.deleteUser(this.selectedUser.userId); }
      }
    ]}
    ];
  }

  ngOnInit(): void {
  }

  deleteBlog(blogId: number): void
  {

  }

  deleteUser(userId: number): void {

  }

  public logout(): void {
    this.auth.logout();
    this.auth.isAuthenticated = false;
    this.router.navigate(['reload']);
  }

  public login(): void {
    this.router.navigate(['/login']);
  }

}
