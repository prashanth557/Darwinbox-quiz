import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isUserNameAvailable: boolean ;
  constructor(public router: Router, public authService: AuthService) {

  }
  ngOnInit() {
    this.router.events.subscribe(params => {
      if (this.authService.isAuthenticated) {
        this.isUserNameAvailable = true;
      }
    });
  }
}
