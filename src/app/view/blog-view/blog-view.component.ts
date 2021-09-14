import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthGuard } from 'src/app/service/AuthGuard';
import { Blog } from 'src/app/domain/blog';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { Status } from 'src/app/domain/status';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
// import { Visibility } from 'src/app/domain/visibility';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  providers: [DatePipe]
})
export class BlogViewComponent implements OnInit {

  public displayedColumns: string[] = ['title'];
  public dataSource: MatTableDataSource<Blog> = new MatTableDataSource();
  public pageSize = 10;
  public pageEvent: PageEvent = new PageEvent();
  public loading: boolean = true;
  public items: MenuItem[] = [];
  public searchTerm: string = '';
  public virtualBlogs: Blog[] = [];
  public user: User = {
    userId: 0, firstName: 'Anonymous', lastName: 'User', userName: 'Anonymous', isAdmin: false, active: false, userEmail: '', 
    canComment: false, canBlog: true, token: '0000000000000000'
  };

  public selectedBlog: Blog = {
    blogId: 0, title: '', text: '', user: this.user, status: Status.DRAFT,
    commentList: [], createdDatetime: new Date(), active: false, likes: 0, visibility: 'PUBLIC',
    dislikes: 0, rating: 0, publishedDatetime: new Date(), editedDatetime: new Date(), 
    commentSecurity: 0, categoryList: []
  };


  constructor(public auth: AuthGuard, private router: Router, private blogService: BlogService, public date: DatePipe) {
    this.items =
    [{
      label: 'Admin Console',
      icon: 'pi pi-fw pi-user',
      visible: auth.isAuthenticated && auth.user.isAdmin,
      routerLink: ['/admin']
    }];

    this.user = this.auth.user;

    this.blogService.getAllPublishedBlogs(this.user.userName, this.user.token, this.auth.visiblilty).then(blogList => {
      this.dataSource = new MatTableDataSource(blogList);
      this.loading = false;
    });
  }

  ngOnInit(): void {}

  public logout(): void {
    this.auth.logout();
    this.auth.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  public login(): void {
    this.router.navigate(['/login']);
  }

  public search(): void {
    this.blogService.search(this.user.userName, this.user.token, this.searchTerm, this.auth.visiblilty).then(blogList => {
      this.dataSource = new MatTableDataSource(blogList);
    });
    this.dataSource.filter = '';
  }

  public clear(): void {
    this.searchTerm = '';
    this.blogService.getAllPublishedBlogs(this.user.userName, this.user.token, this.auth.visiblilty).then(blogList => {
      this.dataSource = new MatTableDataSource(blogList);
      this.loading = false;
    });
  }

}
