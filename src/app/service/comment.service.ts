import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommonService } from '../service/common.service';
import { Comment } from 'src/app/domain/comment';
import { SimpleComment } from 'src/app/domain/simplecomment';
import { KeyValue } from 'src/app/domain/keyvalue';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private common: CommonService) { }



  public async create(username: string, token: string, comment: SimpleComment): Promise<Comment[]>
  {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('username', username)
    .set('token', token);


    const options = {headers: httpHeaders};

    const resp = await this.http.post<Comment[]>(this.common.getBackendService() + 'comment/create', comment, options).toPromise();

    return resp;
  }


  public async getCommentsByBlogId(username: string, token: string, blogId: number): Promise<Comment[]> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    const resp = await this.http.get<Comment[]>(this.common.getBackendService() + 'comment/list/by-blogid/' + blogId, options).toPromise();

    return resp;
  }

  public async getCommentSecurityList(): Promise<KeyValue<string, number>[]> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json');

    const options = {headers: httpHeaders};

    const resp = await this.http.get<KeyValue<string, number>[]>(this.common.getBackendService() +
      'comment/list/security-model/', options).toPromise();

    return resp;
  }
}
