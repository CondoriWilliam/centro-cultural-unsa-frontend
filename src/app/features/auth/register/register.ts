import { Component } from '@angular/core';
import { LucideApple, LucideEyeClosed, LucideEyeOff, LucideMail, LucideUser, LucideX } from '@lucide/angular';

@Component({
  selector: 'app-register',
  imports: [LucideX,LucideEyeOff, LucideUser, LucideMail],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class RegisterComponent {}
