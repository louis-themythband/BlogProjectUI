import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommonService } from '../service/common.service';
import { Blog } from 'src/app/domain/blog';
import { SimpleBlog } from 'src/app/domain/simpleblog';
import { BlogComposite } from 'src/app/domain/blogcomposite';
import { Category } from 'src/app/domain/category';
import { KeyValue } from '../domain/keyvalue';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private common: CommonService) { }

  public async blogByUsername(username: string, token: string, visibility: string): Promise<Blog[]> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('visibility', visibility)
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    const resp = await this.http.get<Blog[]>(this.common.getBackendService() + 'blog/list-published/by-user/' +
    username, options).toPromise();

    return (resp as Blog[]);
  }

  public async getAllPublishedBlogs(username: string, token: string, visibility: string): Promise<Blog[]> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('visibility', visibility)
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    return await this.http.get<Blog[]>(this.common.getBackendService() + 'blog/all', options).toPromise();
  }

  public async getBlog(username: string, token: string, blogId: number): Promise<Blog> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    const resp = await this.http.get<Blog>(this.common.getBackendService() + 'blog/id/' + blogId, options).toPromise();

    return (resp as Blog);
  }

  public async blogLike(username: string, token: string, blogId: number): Promise<number> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'text/plain')
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    const resp = await this.http.put<string>(this.common.getBackendService() + 'blog/like/' + blogId, options).toPromise();

    return Number((resp as string));
  }

  public async blogDislike(username: string, token: string, blogId: number): Promise<number> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'text/plain')
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    const resp = await this.http.put<string>(this.common.getBackendService() + 'blog/dislike/' + blogId, options).toPromise();

    return Number((resp as string));
  }

  public async createNewBlog(username: string, token: string, newblog: Blog, newcategoryList: string[]): Promise<number> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    const blogComposite: BlogComposite = {
      blog: newblog,
      categoryList: newcategoryList
    }

    return await this.http.post<number>(this.common.getBackendService() + 'blog/create', blogComposite, options).toPromise();
  }


  public async search(username: string, token: string, term: string, visibility: string): Promise<Blog[]> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('visibility', visibility)
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    return await this.http.post<Blog[]>(this.common.getBackendService() + 'blog/search/by-term', term, options).toPromise();
  }


  public async searchByUsername(username: string, token: string,  term: string, visibility: string): Promise<Blog[]> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('visibility', visibility)
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    return await this.http.post<Blog[]>(this.common.getBackendService() + 'blog/search/by-user/' + username, term, options).toPromise();
  }

  public async allBlogsByUsername(username: string, token: string, ): Promise<SimpleBlog[]> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    return await this.http.get<SimpleBlog[]>(this.common.getBackendService() + 'blog/list-all/by-user/' + username, options).toPromise();
  }

  public async updateBlog(username: string, token: string, blog: Blog): Promise<boolean> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    return await this.http.put<boolean>(this.common.getBackendService() + 'blog/update/information', blog, options).toPromise();
  }

  public async addCategory(username: string, token: string, blogid: number, text: string): Promise<Category> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    return await this.http.post<Category>(this.common.getBackendService() + 'blog/' + blogid + '/category/add', text, options).toPromise();
  }

  public async removeCategory(username: string, token: string, category: Category): Promise<any> {
    console.log(category);

    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('categoryId', category.categoryId.toString())
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    return await this.http.delete(this.common.getBackendService() + 'blog/category/remove', options).toPromise();
  }

  public async deleteBlog(username: string, token: string, blogId: number): Promise<void> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('blogId', blogId.toString())
    .set('username', username)
    .set('token', token);

    const options = {headers: httpHeaders};

    return this.http.delete<void>(this.common.getBackendService() + 'blog/delete', options).toPromise();
  }

  public async getVilibilityList(): Promise<KeyValue<string, string>[]> {
    const httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json');

    const options = {headers: httpHeaders};

    return this.http.get<KeyValue<string,string>[]>(this.common.getBackendService() + 'blog/visibility/list', options).toPromise();
  }
 }
