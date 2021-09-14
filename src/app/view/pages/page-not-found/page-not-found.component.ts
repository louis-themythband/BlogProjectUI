import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/service/AuthGuard';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public auth: AuthGuard, private router: Router) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.auth.logout();
    this.auth.isAuthenticated = false;
    this.router.navigate(['reload']);
  }

  public login(): void {
    this.router.navigate(['/login']);
  }
}
