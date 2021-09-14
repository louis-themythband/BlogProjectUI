import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/service/AuthGuard';
import { Blog } from 'src/app/domain/blog';
import { BlogService } from 'src/app/service/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Status } from 'src/app/domain/status';
import { User } from 'src/app/domain/user';


@Component({
  selector: 'app-admin-view-blog',
  templateUrl: './admin-view-blog.component.html',
  styleUrls: ['./admin-view-blog.component.scss'],
  providers: [DatePipe]
})
export class AdminViewBlogComponent implements OnInit {

  public blog: Blog = {
    blogId: 0, active: false, categoryList: [], commentList: [], commentSecurity: 0, createdDatetime: new Date(),
    dislikes: 0, editedDatetime: new Date(), likes: 0, publishedDatetime: new Date(), rating: 0, status: Status.DRAFT,
    visibility: 'PUBLIC', text: '', title: '', user:  {userId: 0, active: false, canComment: false, canBlog: true, firstName: '',
    isAdmin: false, lastName: '', userEmail: '', userName: 'Anonymous', token: '0000000000000000'}
  };

  constructor(private auth: AuthGuard, private router: Router, private blogService: BlogService, date: DatePipe, 
              private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aRoute.paramMap.subscribe(param => {
      const user: User = this.auth.user;

      const id = param.get('id');

      this.blogService.getBlog(user.userName, user.token, Number(id)).then(blog => {
        this.blog = blog;
      });
    });
  }

}
