import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/service/AuthGuard';
import { Blog } from 'src/app/domain/blog';
import { CommentSecurity } from 'src/app/domain/commentsecurity';
import { User } from 'src/app/domain/user';
import { BlogService } from 'src/app/service/blog.service';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from 'src/app/domain/comment';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Status } from 'src/app/domain/status';


@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss'],
  providers: [DatePipe]
})
export class ViewBlogComponent implements OnInit {


  public blog: Blog = {
    blogId: 0, active: false, categoryList: [], commentList: [], commentSecurity: 0, createdDatetime: new Date(),
    dislikes: 0, editedDatetime: new Date(), likes: 0, publishedDatetime: new Date(), rating: 0, status: Status.DRAFT,
    visibility: 'PUBLIC', text: '', title: '', user:  {userId: 0, active: false, canComment: false, canBlog: true, firstName: '',
    isAdmin: false, lastName: '', userEmail: '', userName: 'Anonymous', token: '0000000000000000'}
  };

  public commentList: Comment[] = [];


  constructor(private auth: AuthGuard, private router: Router, private blogService: BlogService, private commentService: CommentService,
  date: DatePipe, private aRoute: ActivatedRoute) {}


  ngOnInit(): void {

    this.aRoute.paramMap.subscribe(param => {
      const user: User = this.auth.user;

      const id = param.get('id');

      this.blogService.getBlog(user.userName, user.token, Number(id)).then(blog => {
        this.blog = blog;
      });

      this.commentService.getCommentsByBlogId(user.userName, user.token, Number(id)).then(comments => {
        this.commentList = comments;
      });
    });

  }

  public like(blogId: number): void {
    const user: User = this.auth.user;
    this.blogService.blogLike(user.userName, user.token, blogId).then(count => {
      this.blog.likes = count;
    });
  }

  public dislike(blogId: number): void {
    const user: User = this.auth.user;
    this.blogService.blogDislike(user.userName, user.token, blogId).then(count => {
      this.blog.dislikes = count;
    });
  }

}
