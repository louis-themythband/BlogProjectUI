import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/domain/blog';
import { AuthGuard } from 'src/app/service/AuthGuard';
import { User } from 'src/app/domain/user';
import { Status } from 'src/app/domain/status';
import { KeyValue } from 'src/app/domain/keyvalue';
import { DatePipe } from '@angular/common';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss'],
  providers: [DatePipe]
})
export class NewBlogComponent implements OnInit {

  public user: User = {
    userId: 0, firstName: '', lastName: '', isAdmin: false, active: false, userName: '', userEmail: '', canComment: false, 
    canBlog: true, token: '0000000000000000'
  };

  public blog: Blog = {
    blogId: 0, title: '', text: '', user: this.user, status: Status.DRAFT,
    commentList: [], createdDatetime: new Date(), active: true, likes: 0, visibility: 'PUBLIC',
    dislikes: 0, rating: 0, editedDatetime: new Date(), commentSecurity: 0, categoryList: []
  };

  public categories: string[] = [];

  public visibilities: KeyValue <string, string>[] = []
  public commentSecurity: KeyValue <string, number>[] = [];

  constructor(private auth: AuthGuard, public blogService: BlogService, public router: Router, private commentService: CommentService) {
    this.user = auth.user;
  }


  ngOnInit(): void {
    this.commentService.getCommentSecurityList().then(keyvalues => {
      this.commentSecurity = keyvalues;
    });

    this.blogService.getVilibilityList().then(list => {
      this.visibilities = list
    });
  }

  public createDraft(): void {
    this.blog.publishedDatetime = new Date();
    const user: User = this.auth.user;
    this.blog.user = user;
    this.blogService.createNewBlog(user.userName, user.token, this.blog, this.categories).then(id => {
      this.blog.blogId = id;
      this.router.navigate(['admin/view-blog/:id', {id: [this.blog.blogId]}]);
    });

  }

  public publishNewBlog(): void {
    if (this.auth.isAuthenticated) {
      const user: User = this.auth.user;

      this.blog.status = Status.PUBLISHED;
      this.blog.user = user;
      this.blog.active = true;
      this.blog.publishedDatetime = new Date();

      this.blogService.createNewBlog(user.userName, user.token, this.blog, this.categories).then(id => {
        this.blog.blogId = id;
        this.router.navigate(['admin/edit/myblogs']);
      });
    }
  }
}
