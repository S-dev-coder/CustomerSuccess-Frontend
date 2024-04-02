import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-loginbutton',
  templateUrl: './loginbutton.component.html',
  styleUrl: './loginbutton.component.css'
})
export class LoginbuttonComponent {

  constructor(private router: Router,public auth: AuthService) { }

  isAuthenticated: boolean = false;


  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(authenticated => {
      this.isAuthenticated = authenticated;
      if (authenticated) {
        // User is authenticated, navigate to '/home'
        this.router.navigate(['/home']);
      }
    });
  }

  authRedirect(): void {
    this.auth.loginWithPopup();
  }
}
