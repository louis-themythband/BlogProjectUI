import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthGuard } from 'src/app/service/AuthGuard';
import { Blog } from 'src/app/domain/blog';
import { CommentSecurity } from 'src/app/domain/commentsecurity';
import { BlogService } from 'src/app/service/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/domain/user';
import { Status } from 'src/app/domain/status';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-user-blog-view',
  templateUrl: './user-blog-view.component.html',
  styleUrls: ['./user-blog-view.component.scss'],
  providers: [DatePipe]
})
export class UserBlogViewComponent implements OnInit {

  public displayedColumns: string[] = ['title'];
  public dataSource: MatTableDataSource<Blog> = new MatTableDataSource();
  public pageSize = 10;
  public pageEvent: PageEvent = new PageEvent();
  public loading: boolean = true;
  public items: MenuItem[] = [];
  public searchTerm: string = '';
  public virtualBlogs: Blog[] = [];
  public username: string = '';
  public user: User = {
    userId: 0, firstName: '', lastName: '', isAdmin: false, active: false, userName: '', userEmail: '', canComment: false, 
    canBlog: true, token: '0000000000000000'
  };


  public selectedBlog: Blog = {
    blogId: 0, title: '', text: '', user: this.user, status: Status.DRAFT,
    commentList: [], createdDatetime: new Date(), active: false, likes: 0, visibility: 'PUBLIC',
    dislikes: 0, rating: 0, publishedDatetime: new Date(), editedDatetime: new Date(),
    commentSecurity: 0, categoryList: []
  };


  constructor(public auth: AuthGuard, private router: Router, private aRoute: ActivatedRoute, private blogService: BlogService,
  public date: DatePipe) {
    this.items =
    [{
      label: 'Admin Console',
      icon: 'pi pi-fw pi-user',
      visible: auth.isAuthenticated && auth.user.isAdmin,
      routerLink: ['/admin']
    }];

    this.aRoute.paramMap.subscribe(param => {
      const uname = param.get('username');
      this.username = uname ? uname : '';

      this.blogService.blogByUsername(((uname) ? uname : ''), auth.user.token, this.auth.visiblilty).then(blogList => {
        this.dataSource = new MatTableDataSource(blogList);
        this.loading = false;
      });
    });
  }

  ngOnInit(): void {

  }

  public logout(): void {
    this.auth.logout();
    this.auth.isAuthenticated = false;
    this.router.navigate(['reload']);
  }

  public login(): void {
    this.router.navigate(['/login']);
  }

  public search(): void {
    this.blogService.searchByUsername(this.username, this.auth.user.token, this.searchTerm, this.auth.visiblilty).then(blogList => {
      this.dataSource = new MatTableDataSource(blogList);
    });
    this.dataSource.filter = '';
  }

  public clear(): void {
    this.searchTerm = '';
    const user: User = this.auth.user;
    this.blogService.getAllPublishedBlogs(user.userName, user.token, this.auth.visiblilty).then(blogList => {
      this.dataSource = new MatTableDataSource(blogList);
      this.loading = false;
    });
  }

}
