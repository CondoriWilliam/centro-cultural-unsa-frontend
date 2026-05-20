import { Component } from '@angular/core';
import { LoginComponent } from '../../features/auth/login/login';
import { RegisterComponent } from '../../features/auth/register/register';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-auth-layout',
  imports: [LoginComponent, RegisterComponent, RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayoutComponent {}
