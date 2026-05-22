import { Component } from '@angular/core';
import { LucideApple, LucideEyeClosed, LucideEyeOff, LucideMail, LucideUser, LucideX } from '@lucide/angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  imports: [LucideX, LucideEyeOff, LucideUser, LucideMail, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class RegisterComponent {}
