import { Component, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { CommentBasics } from 'src/app/domain/commentbasics';
import { AuthGuard } from 'src/app/service/AuthGuard';

@Component({
  selector: 'app-add-comment-dialog',
  templateUrl: './add-comment-dialog.component.html',
  styleUrls: ['./add-comment-dialog.component.scss']
})
export class AddCommentDialogComponent implements OnInit {


  public comment: CommentBasics = {blogid: 0, parentCommentId: 0, title: '', text: ''};

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private auth: AuthGuard) { }

  ngOnInit(): void {
    const blogid = this.config.data.blogid;
    const parentCommentId = this.config.data.parentCommentId;

    this.comment.blogid = blogid;
    this.comment.parentCommentId = parentCommentId;
  }

  public publishComment(): void{
    this.ref.close(this.comment);
  }
}
