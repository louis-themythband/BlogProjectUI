import { Component, OnInit, KeyValueDiffers } from '@angular/core';
import { Blog } from 'src/app/domain/blog';
import { AuthGuard } from 'src/app/service/AuthGuard';
import { User } from 'src/app/domain/user';
import { Category } from 'src/app/domain/category';
import { Status } from 'src/app/domain/status';
import { Chips } from 'primeng/chips'
import { DatePipe } from '@angular/common';
import { BlogService } from 'src/app/service/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';
import { KeyValue } from 'src/app/domain/keyvalue';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
  providers: [DatePipe]
})
export class EditBlogComponent implements OnInit {

 public user: User = {
    userId: 0, firstName: '', lastName: '', isAdmin: false, active: false, userName: 'Anonymous', userEmail: '', 
    canComment: false, canBlog: true, token: '0000000000000000'
  };


  public blog: Blog = {
    blogId: 0, title: '', text: '', user: this.user, status: Status.DRAFT,
    commentList: [], createdDatetime: new Date(), active: true, likes: 0, visibility: 'PUBLIC',
    dislikes: 0, rating: 0, editedDatetime: new Date(), commentSecurity: 0, categoryList: []
  };

  public categories: string[] = [];

  public selectedVisibility: KeyValue<string,string> = {key: 'NONE', value: 'NONE'};
  public visibilities: KeyValue <string, string>[] = []
  public commentSecurity: KeyValue <string, number> [] = [];

  constructor(private auth: AuthGuard, private router: Router, private aRoute: ActivatedRoute, private blogService: BlogService,
              private commentService: CommentService) {
    this.user = auth.user;
  }

  ngOnInit(): void {
    const user: User = this.auth.user;
    this.aRoute.paramMap.subscribe(param => {
      const id = param.get('id');

      this.blogService.getBlog(user.userName, user.token, Number(id)).then(blog => {
        this.blog = blog;
      });

      this.commentService.getCommentSecurityList().then(keyvalues => {
        this.commentSecurity = keyvalues;
      });

      this.blogService.getVilibilityList().then(list => {
        this.visibilities = list
      });

    });
  }

  public saveUpdatedDraft(): void {
    const user: User = this.auth.user;

    this.blog.status = Status.DRAFT;
    this.blog.user = this.auth.user;
    this.blog.visibility = this.selectedVisibility.value;

    this.blogService.updateBlog(user.userName, user.token, this.blog).then(updated => {
      if (updated) {
        this.router.navigate(['admin/view-blog/:id', {id: [this.blog.blogId]}]);
      }
    });

  }

  public publishUpdatedBlog(): void {
    if (this.auth.isAuthenticated) {
      if (!this.blog.title.startsWith('*update* ')) {
        this.blog.title = '*update* ' + this.blog.title;
      }

      const user: User = this.auth.user;

      this.blog.status = Status.PUBLISHED;
      this.blog.user = user;
      this.blog.active = true;
      this.blog.publishedDatetime = new Date();
      this.blog.visibility = this.selectedVisibility.value;

      this.blogService.updateBlog(user.userName, user.token, this.blog).then(updated => {
        if (updated) {
          this.router.navigate(['admin/view-blog/:id', {id: [this.blog.blogId]}]);
        }
    });
    }
  }

  public removeCategory(event: any): void {
    // call service to remove category
    const user: User = this.auth.user;

    const category: Category = event.value;
    this.blogService.removeCategory(user.userName, user.token, category);
    console.log(event);
  }

  public addCategory(event: any, categories: Chips): void {
    const text: string = event.value;

    const user: User = this.auth.user;

    this.blogService.addCategory(user.userName, user.token, this.blog.blogId, text).then(category => {
      this.blog.categoryList.pop();
      this.blog.categoryList.push(category);
    });
  }

  public deleteBlog(): void {
    const user: User = this.auth.user;

    this.blogService.deleteBlog(user.userName, user.token, this.blog.blogId).then(() => {
      this.router.navigate(['admin/edit/myblogs']);
    });
  }
}
