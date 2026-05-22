import { Component } from '@angular/core';
import { LucideApple, LucideEyeClosed, LucideEyeOff, LucideUser, LucideX } from '@lucide/angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [LucideX, LucideEyeOff, LucideUser, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {}
