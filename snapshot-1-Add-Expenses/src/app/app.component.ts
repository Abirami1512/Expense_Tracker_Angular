import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ExpenseTableComponent } from "./ExpenseTable/expense-table.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, ExpenseTableComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isAddExpense: boolean = false;

  onClickAddExpense(){
    this.isAddExpense = true;
  }

  onClickCancel(){
    this.isAddExpense = false;
  }
}
