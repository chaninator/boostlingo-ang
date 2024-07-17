import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NavComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  imageUrl: string;
  isLoading = true;
  date = new Date();

  currentMonth = this.date.getMonth() + 1;
  currentYear = this.date.getFullYear();
  currentDay = this.date.getDate();

  currentDate = `${this.currentMonth}/${this.currentDay}/${this.currentYear}`;

  contentText: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.imageUrl = data.message;
      this.isLoading = false;
    });
  }

  getNextImage = () => {
    this.dataService.getData().subscribe((data) => {
      this.imageUrl = data.message;
      this.isLoading = false;
    });
  };
}
