import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/service/AuthGuard';
import { LoginComponent } from 'src/app/view/pages/login/login.component';
import { BlogViewComponent } from 'src/app/view/blog-view/blog-view.component';
import { ViewBlogComponent } from 'src/app/view/blog-view/view-blog/view-blog.component';
import { PageNotFoundComponent } from 'src/app/view/pages/page-not-found/page-not-found.component';
import { AdminConsoleComponent } from 'src/app/view/admin-console/admin-console.component';
import { NewBlogComponent } from 'src/app/view/admin-console/new-blog/new-blog.component';
import { EditBlogComponent } from 'src/app/view/admin-console/edit-blog/edit-blog.component';
import { NewUserComponent } from 'src/app/view/admin-console/new-user/new-user.component';
import { EditUserComponent } from 'src/app/view/admin-console/edit-user/edit-user.component';
import { AdminViewBlogComponent } from 'src/app/view/admin-console/admin-view-blog/admin-view-blog.component';
import { UserBlogViewComponent } from 'src/app/view/user-blog-view/user-blog-view.component';
import { EditBlogSelectComponent } from 'src/app/view/admin-console/edit-blog-select/edit-blog-select.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'blog', component: BlogViewComponent, children: [
    {path: 'view/:id', component: ViewBlogComponent, outlet: 'blogArea'}
  ]},
  {path: 'user-blog/:username', component: UserBlogViewComponent, children: [
    {path: 'view/:id', component: ViewBlogComponent, outlet: 'blogArea'}
  ]},
  {path: 'admin', component: AdminConsoleComponent, children: [
    {path: 'new/blog', component: NewBlogComponent},
    {path: 'edit/myblogs', component: EditBlogSelectComponent, children: [
      {path: 'edit-blog/:id', component: EditBlogComponent, outlet: 'blogArea'}
    ]},
    {path: 'new-user', component: NewUserComponent, canActivate: [AuthGuard]},
    {path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard]},
    {path: 'view-blog/:id', component: AdminViewBlogComponent}
  ]},
  {path: 'reload', redirectTo: 'blog'},
  {path: '', component: BlogViewComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
