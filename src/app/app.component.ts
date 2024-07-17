import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HomeComponent,
    LoginComponent,
    NavComponent,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoggedIn: string | null;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.isLoggedIn = this.localStorageService.getItem('loggedIn');
  }

  renderView() {
    if (this.isLoggedIn === 'true') {
      console.log('logged in');
      this.router.navigate(['']);
    } else {
      console.log('not logged in');
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.renderView();
  }
}
