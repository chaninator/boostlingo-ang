import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  email: string | null;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.email = this.localStorageService.getItem('email');
  }

  onLogout = () => {
    console.log('Logging out');
    this.localStorageService.clear();
    this.router.navigate(['/login']);
  };
}
