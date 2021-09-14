import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/service/comment.service';
import { AuthGuard } from 'src/app/service/AuthGuard';
import { CommentBasics } from 'src/app/domain/commentbasics';
import { SimpleComment } from 'src/app/domain/simplecomment';
import { User } from 'src/app/domain/user';
import { Comment } from 'src/app/domain/comment';
import { DatePipe } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { AddCommentDialogComponent } from 'src/app/view/dialogs/add-comment-dialog/add-comment-dialog.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  providers: [DatePipe, DialogService]
})
export class CommentComponent implements OnInit {

  @Input() blogid: number = 0;
  @Input() parentCommentId: number = 0;
  @Input() commentList: Comment[] = [];

  public comment: SimpleComment = {blogId: 0, parentCommentId: this.parentCommentId, commentTitle: '',
  commentUser: this.auth.user, commentText: '', createdDate: new Date(), active: true};

  constructor(private commentService: CommentService, private auth: AuthGuard, public dialogService: DialogService) {

  }


  ngOnInit(): void {
    if (this.blogid !== 0) {
      const user: User = this.auth.user;
      this.commentService.getCommentsByBlogId(user.userName, user.token, this.blogid).then(commentList => {
        this.commentList = commentList;
      });
    }
  }

  public publishComment(): void {
    const user: User = this.auth.user;
    this.comment.blogId = this.blogid;
    this.commentService.create(user.userName, user.token, this.comment).then(newCommentList => {
      this.commentList = newCommentList;
      this.comment = {blogId: this.blogid, parentCommentId: this.parentCommentId, commentTitle: '',
      commentUser: this.auth.user, commentText: '', createdDate: new Date(), active: true};
    })
  }

  public canPublish(): boolean {
    return this.auth.isAuthenticated;
  }

  public canComment(): boolean {
    return this.auth.isAuthenticated;
  }

  public addComment(blog: number, commentId: number): void {
    const ref = this.dialogService.open(AddCommentDialogComponent, {
      data: {
        blogid: blog,
        parentCommentId: commentId
      },
      header: 'Add Comment',
      width: '70%',
      height: '500px'
    });

    ref.onClose.subscribe((comment: CommentBasics) => {
      const user: User = this.auth.user;

      this.comment.blogId = comment.blogid;
      this.comment.parentCommentId = comment.parentCommentId;
      this.comment.commentTitle = comment.title;
      this.comment.commentText = comment.text;
      this.comment.createdDate = new Date();

      this.commentService.create(user.userName, user.token, this.comment).then(commentList => {
        this.commentList = commentList;
      })
    });
  }
}
