import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  constructor( public router: Router, public cookieService: CookieService) { }

  ngOnInit() {
  }

  loginForm() {
    console.log('Login form is being called');
    this.cookieService.set('username', this.name);
    this.router.navigate(['/quiz']);
  }

}
