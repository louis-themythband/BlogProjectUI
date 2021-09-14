import { Component, OnInit } from '@angular/core';
import { SimpleBlog } from 'src/app/domain/simpleblog';
import { User } from 'src/app/domain/user';
import { BlogHelper } from 'src/app/helper/bloghelper';
import { BlogService } from 'src/app/service/blog.service';
import { AuthGuard } from 'src/app/service/AuthGuard';
@Component({
  selector: 'app-edit-blog-select',
  templateUrl: './edit-blog-select.component.html',
  styleUrls: ['./edit-blog-select.component.scss']
})
export class EditBlogSelectComponent implements OnInit {

  public selectedBlog: SimpleBlog = new BlogHelper().createEmptySimpleBlog();
  public blogList: SimpleBlog[] = [];
  public displayedColumns: string[] = ['title'];

  constructor(private auth: AuthGuard, public blogService: BlogService) { }

  ngOnInit(): void {
    const user: User = this.auth.user;

    this.blogService.allBlogsByUsername(user.userName, user.token).then(blogs => {
      this.blogList = blogs;
    });
  }

  public blogSelected(): void {

  }

}
