// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  username: any;
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.username = this.authService.decodedToken?.unique_name;
  }
  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.sucess('Logged In Successfully');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged Out');
  }
}
