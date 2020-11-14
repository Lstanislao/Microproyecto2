import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router,) { }

  ngOnInit(): void {
  }

    loginWithGoogle(): void {
    this.authService
      .loginWithGoogle()
      .then(() => {
        if (this.authService.isAuthenticated()) {
          this.router.navigate(['/tasks']);
        }
      })
      .catch((err) => console.log(err));
  }

}
