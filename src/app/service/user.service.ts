import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommonService } from '../service/common.service';
import { LoginUser } from '../domain/loginuser';
import { Login } from '../domain/login';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private common: CommonService) { }


  async login(login: Login): Promise <LoginUser> {

    const authorizationData = 'Basic ' + btoa(login.username + ':' + login.password);

    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('username', login.username)
    .set('password', login.password);
    // .set('Authorization', authorizationData);

    const options = {headers: httpHeaders};

    const resp = await this.http.get<any>(this.common.getBackendService() + 'blog-user/login', options).toPromise();
    return (resp as LoginUser);
  }

  async logout(username: string, token: string): Promise<void> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    return await this.http.get<any>(this.common.getBackendService() + 'blog-user/logout', options).toPromise();
  }
}
