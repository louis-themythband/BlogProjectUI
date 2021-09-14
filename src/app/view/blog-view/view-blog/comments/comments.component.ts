import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from 'src/app/domain/comment';
import { CommentBasics } from 'src/app/domain/commentbasics';
import { SimpleComment } from 'src/app/domain/simplecomment';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthGuard } from 'src/app/service/AuthGuard';
import { User } from 'src/app/domain/user';
import { AddCommentDialogComponent } from 'src/app/view/dialogs/add-comment-dialog/add-comment-dialog.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [DialogService]
})
export class CommentsComponent implements OnInit {

  @Input() commentList: Comment[] = [];
  private blogid: number = 0;
  private parentCommentId: number = 0;

  public comment: SimpleComment = {blogId: this.blogid, parentCommentId: this.parentCommentId, commentTitle: '',
  commentUser: this.auth.user, commentText: '', createdDate: new Date(), active: true};

  constructor(public dialogService: DialogService, private auth: AuthGuard, private commentService: CommentService) { }

  ngOnInit(): void {
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


  public canComment(): boolean {
    return this.auth.isAuthenticated;
  }
}
