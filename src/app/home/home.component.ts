import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: String = '';
  constructor( public router: Router) { }

  ngOnInit() {
  }

  loginForm() {
    console.log('Login form is being called');
    this.router.navigate(['/quiz']);
  }

}
