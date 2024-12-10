import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './Expenses/user-input/user-input.component';
import { Router } from '@angular/router';
import { ExpensesComponent } from './Expenses/expenses.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { IncomeComponent } from './Income/income.component';
import { DashboardComponent } from './Dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) {}
}
