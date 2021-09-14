import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() {
    this.items =
    [{
      label: 'New Blog',
      icon: 'pi pi-fw pi-plus',
      routerLink: ['']
    },
    {
      label: 'Edit Blog',
      icon: 'pi pi-fw pi-pencil',
      command: (event) => {this.editBlog(0)}
    },
    {
      label: 'Delete Blog',
      icon: 'pi pi-fw pi-minus-circle',
      command: (event) => {this.deleteBlog(0)}
    },
  {
      label: 'Admin Console',
      icon: 'pi pi-fw pi-user',
      visible: true,
      routerLink: ['']
    }];
   }

  ngOnInit(): void {
   
  }

  editBlog(blogId: number): void
  {

  }

  deleteBlog(blogId: number): void
  {

  }

}
