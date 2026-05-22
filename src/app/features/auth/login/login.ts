import { Component } from '@angular/core';
import { LucideApple, LucideEyeClosed, LucideEyeOff, LucideUser, LucideX } from '@lucide/angular';

@Component({
  selector: 'app-login',
  imports: [LucideX,LucideEyeOff, LucideUser],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {}
