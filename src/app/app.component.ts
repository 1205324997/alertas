import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  ],
})
export class AppComponent {

  isLoginPage: boolean = false; 
  isRegisterPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      if (this.router.url === '/login') {
        this.isLoginPage = true;
        this.isRegisterPage = false;
      } else if (this.router.url === '/register') {
        this.isRegisterPage = true;
        this.isLoginPage = false;
      } else {
        this.isLoginPage = false;
        this.isRegisterPage = false;
      }
    });
  }
  
  title = 'alert';
}
