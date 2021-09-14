import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/domain/login';
import { UserService } from 'src/app/service/user.service';
import { AuthGuard } from 'src/app/service/AuthGuard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: Login = {
    username: '',
    password: ''
  };

  public message: string = '';

  constructor(private userService: UserService, private auth: AuthGuard, private router: Router ) { }

  ngOnInit(): void {
  }

  public loginEvent(): void {
    this.userService.login(this.login).then(user => {
      if (user.responseCode === 200) {
        this.auth.user = user.user;
        this.auth.isAuthenticated = true;
        this.router.navigate(['blog']);
      } else {
        this.message = user.responseMessage;
      }
    });
  }

}
