import { Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { ExpensesComponent } from './Expenses/expenses.component';
import { IncomeComponent } from './Income/income.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'incomes', component: IncomeComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Default route
];
